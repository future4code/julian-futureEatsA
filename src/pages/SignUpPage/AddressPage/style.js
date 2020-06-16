import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';



export const Input = styled(TextField)`
  &&{
    margin: 7px;
        
  }
`

export const Bar = styled.div`
  height: 50px;
  border-bottom:1px solid gray;
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
  margin-top: 1rem;
  padding-bottom:1rem;
  font-size: 16px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-left: 2rem;
  margin-right: 2rem;

 `