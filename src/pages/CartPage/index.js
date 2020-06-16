import React, { useState } from 'react'
import { Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


const CartContainer = styled.div`
border: 1px solid black;
width: 360px; 
height: 640px;
margin: 30px;

`
const CardAdress = styled.div`
width: 360px; 
height: 76px;
background-color: #eeeeee;

`
const TitleAdress = styled.p`
color: #b8b8b8;
padding: 16px 16px 0 16px;
`

const ButtonConfirm = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 328px;
height: 42px;
border-radius: 2px;
background-color: rgba(92, 182, 70, 0.5);
margin-left: 16px;
`
const DeliveryAddress = styled.div`
color: #000000;
font-family: Roboto;
font-size: 16px;
margin: 8px 16px 16px 16px;
`
const ItensCartContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const Frete = styled.p`
display: flex;
justify-content: flex-end;
margin: 45px 16px 0px 0px;

`
const SubTotalContent = styled.div`
display:flex;
justify-content: space-between;
margin: 16px;
`
const ValueTotal = styled.p`
color: #5cb646;
`
const FormaDePagamento = styled.div`

margin: 10px 16px 0px 16px;

`


const CartPage = ()=>{
    const [value, setValue] = useState('Dinheiro');

    const handleChange = (event) =>{
         setValue(event.target.value)
    }

    return(
        <CartContainer>
            <Header />
            <CardAdress>
                <TitleAdress>Endereço de entrega </TitleAdress>
                <DeliveryAddress>
                    rua das ruas, n°666
                </DeliveryAddress>
            </CardAdress>
            <ItensCartContainer>
                Itens do carrinho
            </ItensCartContainer>
            <Frete> Frete R$0,00</Frete>
            <SubTotalContent>
                <p>SUBTOTAL</p>
                <ValueTotal>R$0,00</ValueTotal>
            </SubTotalContent>
            <FormaDePagamento>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Forma de Pagamento</FormLabel>
                    <RadioGroup aria-label="pagamento" name="pagamento" value={value} onChange={handleChange}>
                        <FormControlLabel value="money" control={<Radio />} label="Dinheiro"/>
                        <FormControlLabel value="credCard" control={<Radio />} label="Cartão de Crédito"/>
                    </RadioGroup>
                </FormControl>
            </FormaDePagamento>
            <ButtonConfirm>Confirmar</ButtonConfirm>
            <Footer/>
        </CartContainer>
    )
}
export default CartPage