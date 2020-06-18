import React from 'react'
import Header from '../../../components/Header'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useForm} from '../../../hooks/useForm'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const ContainerUpdateProfile = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const TextFieldStyled = styled(TextField)`
    width: 90%;
`
const FormStyled = styled.form`
    width: 100%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    height: 300px;
    justify-content: space-around;
`
const ButtonStyled = styled(Button)`
    width: 90%;
    height: 42px;
    &&{
        background-color: #5cb646;
        :focus{
            background-color: #5cb646;
        }
    }
`

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
            console.log(response)
            // history.push('/profile')
        }).catch(error=>{
            console.log(error)
        })
        console.log(body)
    }
    const handleSubmit = event => {
        event.preventDefault();
      };
    return(
        <ContainerUpdateProfile>
            <Header/>
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
                name='cpf'
                value={form.cpf}
                onChange={onChangeForm}
                variant="outlined"
                label="CPF"
                // inputProps={{
                //     pattern:"/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/",
                //     title:"Digite o CPF no formato nnn.nnn.nnn-nn"}}
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