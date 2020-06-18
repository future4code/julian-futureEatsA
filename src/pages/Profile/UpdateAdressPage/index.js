import React from 'react'
import styled from 'styled-components'
import Header from '../../../components/Header'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios';
import {useHistory} from 'react-router-dom';



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
  const history = useHistory();
  

    const getFullAddress = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address', {
            headers: {
                'auth': `${localStorage.token}`
            }
        }).then((response) => {
            console.log(response.data)
        })
    }


    return(
        <ContainerUpdateProfile>
            <Header/>
            <FormStyled>
                <TextFieldStyled
                    variant="outlined"
                    label="Logradouro"
                    required
                    />
                <TextFieldStyled
                    variant="outlined"
                    label="número"
                    type='number'
                    required
                    />
                <TextFieldStyled
                    variant="outlined"
                    label="complemento"
                    />
                <TextFieldStyled
                    variant="outlined"
                    label="Bairro"
                    required
                    />
                <TextFieldStyled
                    variant="outlined"
                    label="Cidade"
                    required
                    />
                <TextFieldStyled
                    variant="outlined"
                    label="Estado"
                    required
                    />
                <ButtonStyled><b>Salvar</b></ButtonStyled>
            </FormStyled>
        </ContainerUpdateProfile>
    )
}

export default UpdateAdressPage