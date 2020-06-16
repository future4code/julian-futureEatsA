import React from 'react'
import logoLogin from '../../images/logo-future-eats.png'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const ContainerLoginPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContainerForm = styled.form`
    width: 90vw;
    height: 28vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ButtonStyled = styled(Button)`
    height: 50px;
    &&{
        font-weight: bold;
        color:black;
        background-color: #5cb646;
        }
`
const Titulo = styled.h4`
    margin-bottom: 15px;
    margin-top: 30px;
`
const Logo = styled.img`
    height: 10vh;
`
const PStyled = styled.p`
    margin-top: 5vh;
`
const Lab = styled.h1`
    margin-top:14vh;
    color:black;
    margin-bottom: -12px;
    font-size: 3em;
    font-weight: normal;
`

const Eats = styled.h1`
    color: #5cb646;
    font-size: 3em;
`
const LoginPage = () => {
    return (
        <ContainerLoginPage>
            <div>
                <Lab>Labenu</Lab>
                <Eats>Eats</Eats>
            </div>
            <Titulo>Entrar</Titulo>
            <ContainerForm>

                <TextField
                    label="E-mail"
                    placeholder="email@gmail.com"
                    variant="outlined"
                    required
                />
                <TextField
                    label="PassWord"
                    placeholder="Minimo 6 caracteres"
                    variant="outlined"
                    required
                />
                <ButtonStyled
                    variant="contained"
                >
                    Entrar
                    </ButtonStyled>
            </ContainerForm>
            <PStyled>Não possui cadastro? Clique Aqui</PStyled>
        </ContainerLoginPage>
    )
}

export default LoginPage