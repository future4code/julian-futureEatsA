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
    justify-content: center;
`
const ContainerForm = styled.form`
    width: 90vw;
    height: 23vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ButtonStyled = styled(Button)`
    height: 50px;
`
const Titulo = styled.h4`
    margin-bottom: 15px;
    margin-top: 30px;
`
const Logo = styled.img`
    height: 10vh;
`
const PStyled = styled.p`
    margin: 10px;
`

const LoginPage = ()=>{
    return(
        <ContainerLoginPage>
            <Logo src={logoLogin} alt="imagem"/>
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
                    color="primary"
                    >
                        Entrar
                    </ButtonStyled>
            </ContainerForm>
            <PStyled>Não possui cadastro? Clique Aqui</PStyled>
        </ContainerLoginPage>
    )
}

export default LoginPage