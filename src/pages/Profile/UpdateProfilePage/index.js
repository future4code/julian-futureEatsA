import React from 'react'
import Header from '../../../components/Header'
import {useForm} from '../../../hooks/useForm'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { cpfMask } from '../../../components/mask'
import {ContainerUpdateProfile,
        TextFieldStyled,
        FormStyled,
        ButtonStyled} from './style'



const UpdateProfile = ()=>{
    const history = useHistory()
    const token = localStorage.getItem('token')
    const {form, onChange} = useForm({name: '', email: '', cpf: ''})

    const onChangeForm = event =>{
        const {name, value} = event.target  
        onChange(name, value)
    }

    const salvar = ()=>{
        const body={
            name: form.name,
            email: form.email,
            cpf: form.cpf
        }
        
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile', 
            body, 
            {
                headers: {
                    auth: token,
                    "Content-Type": "application/json"
                }
            }).then(response =>{
        }).catch(error=>{
            alert(error)
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
      };
    return(
        <ContainerUpdateProfile>
            <Header nomeDaPagina={"Editar"}/>
            <FormStyled onSubmit={handleSubmit}>
                <TextFieldStyled
                name='name'
                value={form.name}
                onChange={onChangeForm}
                variant="outlined"
                label="nome"
                inputProps={{ 
                    pattern: "[A-Za-z ]{3,}", 
                    title: "O nome deve conter 3 letras no mínimo" }}
                required
                />
                <TextFieldStyled
                name='email'
                value={form.email}
                onChange={onChangeForm}
                variant="outlined"
                type="email"
                label="email"
                required
                />
                <TextFieldStyled
                maxLength='14'
                name='cpf'
                value={cpfMask(form.cpf)}
                onChange={onChangeForm}
                variant="outlined"
                label="CPF"
                required
                />
                <ButtonStyled type={'submit'} onClick={salvar}>
                    <b>Salvar</b>
                </ButtonStyled>
            </FormStyled>
        </ContainerUpdateProfile>
    )
}

export default UpdateProfile;