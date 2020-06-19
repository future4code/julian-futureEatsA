import React from 'react';
import Header from '../../components/Header'
import { ContainerSignUp, Texto, Form, Input, Botao, Lab, Eats } from './style';
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {useStyles} from './useStyles';
import {useForm} from '../../hooks/useForm';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {cpfMask} from '../../components/mask'




  

const SignUpPage = () => {
  const history = useHistory();
  const classes = useStyles();


    const [values, setValues] = React.useState({
      password: "",
      showPassword: false
    });

  // const handleChange = prop => event => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
      event.preventDefault();
    };

    const handleInputChange = event => {
      const { name, value } = event.target;
      onChange(name, value);
    };


    const { form, onChange } = useForm({
      name: "", 
      email: "",
      cpf: "",
      password: "",
      confirm:"",
      });


    const submit = (event) => {
     event.preventDefault();
      console.log(form)

      if(form.password !== form.confirm) {
        alert("Senha incorreta")

     }else{
      const body = {
        name: form.name, 
        email: form.email,
        cpf: form.cpf,
        password: form.password,
      }
      
      axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup', body,
        {
          headers: {
              'Content-Type': 'application/json'
          }
      })
        .then((response) => {
          window.localStorage.setItem("token", response.data.token)
          history.push("/Address")
          console.log(response)
        })
        .catch((error) => {
          alert(error.message)
        })
       
 
     }
      

      
      };
    
     return (
      <div>
        <ContainerSignUp>
        <Header />

        <div>
          <Lab>Labenu</Lab>
          <Eats>Eats</Eats>
        </div>

        <Form onSubmit={submit}>
          <Texto>Cadastrar</Texto>

          <Input
            name='name'
            type="text"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Nome e Sobrenome"
            label="Nome"
            variant="outlined"
            InputProps={{
              pattern: "[A-Za-z ]{3,}",
              title: "Nome e Sobrenome deve conter no mínimo 3 letras."
          }}
            required
          />

          <Input
            name='email'
            type="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="email@email.com"
            label="E-mail"
            variant="outlined"
            required
          />

          <Input
            maxLength='14'
            name='cpf'
            type="text"
            onChange={handleInputChange}
            value={cpfMask(form.cpf)}
            placeholder="000.000.000-00"
            label="CPF"
            variant="outlined"
            required
          />

          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Senha
              </InputLabel>
            <OutlinedInput
              name="password"
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={form.password}
              placeholder="Mínimo 6 caracteres"
              onChange={handleInputChange}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>

          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Confirmar
              </InputLabel>
            <OutlinedInput
              name="confirm"
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={form.confirm}
              placeholder="Minimo 6 caracteres"
              onChange={handleInputChange}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>

          <Botao type='submit' variant="contained" size='large'>Criar</Botao>
        </Form>
      </ContainerSignUp>
    </div>
  )
}
export default SignUpPage