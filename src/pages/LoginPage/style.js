import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const ContainerLoginPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerForm = styled.form`
    width: 90vw;
    height: 28vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Titulo = styled.h4`
margin-bottom: 15px;
margin-top: 30px;
`

export const PStyled = styled.p`
    margin-top: 5vh;
`

export const Lab = styled.h1`
    margin-top:14vh;
    color:black;
    margin-bottom: -12px;
    font-size: 3em;
    font-weight: normal;
`
export const Eats = styled.h1`
    color: #5cb646;
    font-size: 3em;
`

export const ButtonStyled = styled(Button)`
    height: 50px;
    &&{
        font-weight: bold;
        color:black;
        background-color: #5cb646;
        }
`