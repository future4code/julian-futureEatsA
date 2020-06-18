import React, { useState } from "react";
import { CardAdress, TitleAdress, DeliveryAddress } from "./style";
 


const CardAddresCart = (props) => {

    return(
        <CardAdress>
                <TitleAdress>Endereço de entrega </TitleAdress>
                <DeliveryAddress>
                    rua das ruas, n°666
                </DeliveryAddress>
        </CardAdress>
    )
}
export default CardAddresCart;