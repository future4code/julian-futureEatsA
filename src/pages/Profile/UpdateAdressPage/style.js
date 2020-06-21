import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const TextFieldStyled = styled(TextField)`
width: 90%;
`

export const ContainerUpdateProfile = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
`
export const FormStyled = styled.form`
width: 100%;
display: flex; 
flex-direction: column;
align-items: center;
height: 500px;
justify-content: space-around;
`

export const ButtonStyled = styled(Button)`
width: 90%;
height: 42px;
&&{
    background-color: #5cb646;
    :focus{
        background-color: #5cb646;
    }
}

`