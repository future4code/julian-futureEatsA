import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Container = styled.div`
    width: 100vw;
    height: ${({ aparece }) => (aparece ? '22vh' : '8vh')};
    background-color: #5cb646ed;
    display: flex;
    position: fixed;
    bottom: 10vh;
    color: white;
    justify-content: space-between;
    align-items:center;
    padding-right:5vw;
    padding-left:5vw;
    transition: 0.5s;
`

const ContainerContent = styled.div`
    color:black;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    height: ${({ aparece }) => (aparece ? '100%' : 'fit-content')};
    padding-top:10%;
    padding-bottom:10%;
    transition: 0.5s;
`

const Titulo = styled.h3`
    color:white;
    font-weight: normal;
    transition: 0.5s;
`

const Restaurant = styled.h3`
    font-weight: normal;
    display: ${({ aparece }) => (aparece ? 'block' : 'none')};
    transition: 0.5s;
`

const Preco = styled.h3`
    display: ${({ aparece }) => (aparece ? 'block' : 'none')};
    transition: 0.5s;
`

const CloseIconContainer = styled.div``

const ActiveOrder = () => {
    const [activeOrder, setActiveOrder] = useState({restaurantName:'', totalPrice:''})
    const [mostraTexto, setMostraTexto] = useState(true)

    const pegaPedido = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/active-order',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth': `${localStorage.token}`
                    }
                }
            )
            .then((response) => {
                if(response.data.order !== null){
                setActiveOrder(response.data.order)                    
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    useEffect(() => {
        pegaPedido()
    }, [])

    const alteraStatus = () =>{
        setMostraTexto(!mostraTexto)
    }

    return (
        <Container aparece={mostraTexto}>
            {mostraTexto ? (<AccessTimeIcon style={{ fontSize: 40 }} />) : (<></>)}
            
            <ContainerContent >
                <Titulo aparece={mostraTexto}>Pedido em andamento</Titulo>
                <Restaurant aparece={mostraTexto}>{activeOrder.restaurantName}</Restaurant>
                <Preco aparece={mostraTexto}>SUBTOTAL R${activeOrder.totalPrice}</Preco>
            </ContainerContent>
            <CloseIconContainer onClick={alteraStatus}>
                {mostraTexto ? (<CloseIcon style={{ fontSize: 30 }} />) : (<ExpandLessIcon style={{ fontSize: 30 }} />)}
            </CloseIconContainer>
        </Container>
    )
}
export default ActiveOrder;