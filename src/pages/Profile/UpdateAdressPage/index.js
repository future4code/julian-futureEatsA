import React from 'react'
import styled from 'styled-components'
import Header from '../../../components/Header'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {useForm} from '../../../hooks/useForm'


const ContainerUpdateProfile = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
`
const FormStyled = styled.form`
    width: 100%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    height: 500px;
    justify-content: space-around;
`
const TextFieldStyled = styled(TextField)`
    width: 90%;
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
const UpdateAdressPage = ()=>{

    const {form, onChange} = useForm({rua: '', numero: '', complemento: '', bairro: '', cidade: '', estado: ''})
    const token = localStorage.getItem('token')

    const onChangeForm = event =>{
        const {name, value} = event.target
        onChange(name, value)
    }
    const salvar = () =>{
        const body ={
            street: form.rua,
            number: form.numero,
            neighbourhood: form.bairro,
            city: form.cidade,
            state: form.estado,
            complement: form.complemento
        }
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address', body,{
            headers: {
                auth: token,
                "Content-Type": 'application/json'
            }
        }).then(response =>{
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
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
                    name='rua'
                    value={form.rua}
                    onChange={onChangeForm}
                    variant="outlined"
                    label="Rua"
                    required
                    // inputProps={{
                    //     pattern: 
                    // }}
                    />
                <TextFieldStyled
                    name='numero'
                    value={form.numero}
                    onChange={onChangeForm}
                    variant="outlined"
                    label="Número"
                    type='number'
                    required
                    />
                <TextFieldStyled
                    name='complemento'
                    value={form.complemento}
                    onChange={onChangeForm}
                    variant="outlined"
                    label="complemento"
                    />
                <TextFieldStyled
                    name='bairro'
                    value={form.bairro}
                    onChange={onChangeForm}
                    variant="outlined"
                    label="Bairro"
                    required
                    />
                <TextFieldStyled
                    name='cidade'
                    value={form.cidade}
                    onChange={onChangeForm}
                    variant="outlined"
                    label="Cidade"
                    required
                    />
                <TextFieldStyled
                    name='estado'
                    value={form.estado}
                    onChange={onChangeForm}
                    variant="outlined"
                    label="Estado"
                    required
                    />
                <ButtonStyled type={'submit'} onClick={salvar}><b>Salvar</b></ButtonStyled>
            </FormStyled>
        </ContainerUpdateProfile>
    )
}

export default UpdateAdressPage