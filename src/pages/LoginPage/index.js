import React from 'react';
import TextField from '@material-ui/core/TextField';
import {useForm} from '../../hooks/useForm';
import axios from "axios";
import { useHistory } from "react-router-dom";
import {ContainerLoginPage,
        ContainerForm,
        Titulo,
        PStyled,
        Lab,
        Eats,
        ButtonStyled
      } from './style';



const LoginPage = () => {
    const history = useHistory();
    const { form, onChange } = useForm({ emailInserido: "", senha: "" });

    const handleInputChange = event => {
        const { name, value } = event.target;
        onChange(name, value);
    };

    const onClickEntrar = event => {
        console.log('click')
        event.preventDefault();
        const body = {
            email: form.emailInserido,
            password: form.senha
        }
        axios
            .post(
                'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login',
                body,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                console.log(response.data)
                 {response.data.user.hasAddress ? (
                     history.push("home/feedPage")) : (
                         history.push("/Address")
                     )}
                
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const goToSignUpPage = () =>{
        history.push("/signup")
    }

    return (
        <ContainerLoginPage>
            <div>
                <Lab>Labenu</Lab>
                <Eats>Eats</Eats>
            </div>
            <Titulo>Entrar</Titulo>
            <ContainerForm >
                <TextField
                    label="E-mail"
                    placeholder="email@gmail.com"
                    variant="outlined"
                    name="emailInserido"
                    value={form.emailInserido}
                    onChange={handleInputChange} 
                    required
                />
                <TextField
                    label="PassWord"
                    placeholder="Minimo 6 caracteres"
                    variant="outlined"
                    required
                    name="senha"
                    value={form.senha}
                    onChange={handleInputChange}
                    type={"password"}
                />
                <ButtonStyled
                    variant="contained"
                    onClick={onClickEntrar}
                >
                    Entrar
                </ButtonStyled>
            </ContainerForm>
            <PStyled>Não possui cadastro? <b onClick={goToSignUpPage}>Clique Aqui</b></PStyled>
        </ContainerLoginPage>
    )
}

export default LoginPage