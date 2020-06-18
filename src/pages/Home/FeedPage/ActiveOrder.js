import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios"

const Container = styled.div`
    width: 100vw;
    height: 22vh;
    background-color: #5cb646ed;
    display: flex;
    position: fixed;
    bottom: 10vh;
    color: white;
    justify-content: space-between;
    align-items:center;
    padding-right:5vw;
    padding-left:5vw;
`

const ContainerContent = styled.div`
    color:black;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    height: 100%;
    padding-top:10%;
    padding-bottom:10%;

`

const Titulo = styled.h3`
    color:white;
    font-weight: normal;

`

const Restaurant = styled.h3`
    font-weight: normal;

`

const CloseIconContainer = styled.div`

`

const ActiveOrder = () => {
    const [activeOrder, setActiveOrder] = useState({restaurantName:'', totalPrice:''})


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

    return (
        <Container>
            <AccessTimeIcon style={{ fontSize: 40 }} />
            <ContainerContent>
                <Titulo>Pedido em andamento</Titulo>
                <Restaurant>{activeOrder.restaurantName}</Restaurant>
                <h3>SUBTOTAL R${activeOrder.totalPrice}</h3>
            </ContainerContent>
            <CloseIconContainer>
                <CloseIcon style={{ fontSize: 30 }} />
            </CloseIconContainer>
        </Container>
    )
}
export default ActiveOrder;