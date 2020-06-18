import React, { useState } from 'react'
import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { CartContainer, CardAdress, TitleAdress, DeliveryAddress, ItensCartContainer, Frete, SubTotalContent, ValueTotal, FormaDePagamento, ButtonConfirm } from './style'
import { useHistory } from 'react-router-dom'

const CartPage = props =>{
    const history = useHistory();
    const [value, setValue] = useState('Dinheiro');

    const handleChange = (event) =>{
         setValue(event.target.value)
    }

    return(
        <CartContainer>
            <Header nomeDaPagina={'Meu carrinho'}/>
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