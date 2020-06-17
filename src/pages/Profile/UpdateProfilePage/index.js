import React from 'react'
import Header from '../../../components/Header'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
    return(
        <ContainerUpdateProfile>
            <Header/>
            <FormStyled>
                <TextFieldStyled
                variant="outlined"
                label="nome"
                required
                />
                <TextFieldStyled
                variant="outlined"
                type="email"
                label="email"
                required
                />
                <TextFieldStyled
                variant="outlined"
                label="CPF"
                type="number"
                required
                />
                <ButtonStyled >
                    <b>Salvar</b>
                </ButtonStyled>
            </FormStyled>
        </ContainerUpdateProfile>
    )
}

export default UpdateProfile;