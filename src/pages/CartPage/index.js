import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useHistory } from 'react-router-dom'
import MainCart from './mainCart'
import CardAddresCart from './cardAddres';

const CartContainer = styled.div`
display: grid;
grid-template-rows: 1fr 1fr 8fr 1fr;
width: 100vw; 
height: 100vh;
`

const CartPage = props =>{
    const history = useHistory();


    return(
        <CartContainer>
            <Header nomeDaPagina={'Meu carrinho'}/>
            <CardAddresCart />
            <MainCart />
            <Footer/>
        </CartContainer>
    )
}
export default CartPage