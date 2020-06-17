import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from  '@material-ui/core/Button';


export const Input = styled(TextField)`
  &&{
    margin: 8px;
    width:332px;
    
  }
`
export const Botao = styled(Button)`
  &&{
    background-color: #5cb646;
  color: black;
  font-size: 16px;
  margin-top: 1rem;
  margin-left: 10px;
  margin-right: 10px;
  }
`


export const ContainerSignUp = styled.div`
  width:100vw;
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items:center;
`

export const LogoEats = styled.div`
  display: flex;
  justify-content:center;
  margin-top: 3rem;
`
export const ImagemLogo = styled.img`
  width: 100%;
  height: 100%;
`
export const Texto = styled.p`
  text-align: center;
  margin-top: 2vh;
  padding-bottom:2vh;
  font-size: 16px;
  font-weight: bold;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-left: 16px;
  margin-right: 16px;

 `
export const Lab = styled.h1`
margin-top:2vh;
color:black;
margin-bottom: -12px;
font-size: 3em;
font-weight: normal;
`

export const Eats = styled.h1`
color: #5cb646;
font-size: 3em;
`
