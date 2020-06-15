import styled from 'styled-components'

export const ContainerFooter = styled.div`
box-shadow: inset 0 0 20px 3px #00000024;
background-color:white;
border-top: 1px solid #0000001e;
display:flex;
justify-content:space-around;
align-items:center;
width:100%;
height: 10vh;
position: sticky;
bottom: 0;
`

export const ContainerHeader = styled.div`
box-shadow: inset 0 0 20px 3px #00000012;
background-color:white;
border-bottom: 1px solid #0000001e;
display:grid;
grid-template-columns: repeat(3, 1fr);
width:100%;
height: 10vh;
position: sticky;
top: 0;
padding:1vw;
padding-left: 5vw;
padding-right: 2vw;
justify-items: start;
align-items: center;
font-size:  0;
font-size: 1.2em;
font-weight: bold;
`

export const TituloHeader = styled.p`
justify-self:center;
`