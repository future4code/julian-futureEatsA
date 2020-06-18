import React, { useState } from "react";
import {ItensCartContainer, Frete, SubTotalContent, ValueTotal, FormaDePagamento, ButtonConfirm } from './style';
import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import styled from "styled-components";

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const MainCart = () => {
    const [value, setValue] = useState('Dinheiro');

    const handleChange = (event) =>{
         setValue(event.target.value)
    }

    return(
        <MainContent>
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
        </MainContent>
    )
}

export default MainCart;


            