import React from 'react';
import {Header} from '../../components/Header'
import Button from  '@material-ui/core/Button';
import logo from '../img/logo.png';
import {Bar, LogoEats, ImagemLogo, Texto, Form, Input} from './style';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import BackButton from '@material-ui/icons/ArrowBackIos';

    const useStyles = makeStyles(theme => ({
    
      margin: {
        margin: theme.spacing(1)
      },
      withoutLabel: {
        marginTop: theme.spacing(3)
      },
      textField: {
        width: "36ch"
      }
    }));


    const SignUpPage = () => {

      const classes = useStyles();
      const [values, setValues] = React.useState({
        password: "",
        showPassword: false
      });

      const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleMouseDownPassword = event => {
        event.preventDefault();
      };
      


   
      return(
          <div>
              <Bar>
               <BackButton/>
              </Bar>
              
              <LogoEats>
                <ImagemLogo src={logo} alt="future-eats" />
              </LogoEats>

              <Form>
                <Texto>Cadastrar</Texto>
          
                <Input
                name='name'
                type="text"
                value={''}
                onChange={''}
                placeholder="Nome e Sobrenome" 
                label="Nome" 
                variant="outlined"
                required
                />

                <Input
                name='email'
                type="email"
                value={''}
                onChange={''}
                placeholder="email@email.com" 
                label="E-mail" 
                variant="outlined"
                required
                />

                <Input
                name='cpf'
                type="text"
                onChange={''}
                value={''}
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
                
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                placeholder="Mínimo 6 caracteres"
                onChange={handleChange("password")}
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
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                placeholder="Minimo 6 caracteres"
                onChange={handleChange("password")}
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

            <Button variant="contained" color="primary">Criar</Button>

          </Form>
          

      </div>
  )
}
export default SignUpPage