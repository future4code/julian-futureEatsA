import React from 'react'
import { Card, ImgFood, Title, Ingredients, PriceAndButton, Price, BotaoAdicionar } from '../pages/Home/RestaurantPage/style';

const CardProduct = () => {
    return (
        <div>
            <Card>
                <ImgFood src={product.photoUrl} alt=''/>
                <ContainerMainFood>
                    <Title>{product.name}</Title>
                    <Ingredients>{product.description}</Ingredients>
                    <PriceAndButton>
                        <Price>{product.price}</Price>
                        <BotaoAdicionar variant="outlined" color="secondary" size='small' onClick={() => addProductToCart(product)}>adicionar</BotaoAdicionar>
                    </PriceAndButton>
                    </ContainerMainFood>  
            </Card>
        </div>
    )
}

export default CardProduct;