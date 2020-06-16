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
  &&{background-color: #5cb646;
  color: black;
  font-size: 16px;
  margin-top: 1rem;
  margin-left: 10px;
  margin-right: 10px;}
`

export const ContainerAddress = styled.div`
  width:100vw;
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items:center;
`

export const LogoEats = styled.div`
  display: flex;
  justify-content:center;
  margin-top: 20px;
`
export const ImagemLogo = styled.img`
  width: 20vw;
  height: 10vh;
`
export const Texto = styled.p`
  text-align: center;
  margin-top: 3rem;
  padding-bottom:2rem;
  font-size: 16px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-left: 16px;
  margin-right: 16px;

 `