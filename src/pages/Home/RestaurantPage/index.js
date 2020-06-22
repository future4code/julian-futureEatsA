import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import {ContainerRestaurant,
        MainPhoto,
        ImgRestaurant, 
        ContainerTitle, 
        Title, 
        Paragraph,
        ContainerTime,
        ContainerAddress, 
        ContainerMainTitle,
        MainTitle,
        Ingredients,
        Price,
        ImgFood,
        ContainerMainFood,
        Card,
        BotaoAdicionar,
        PriceAndButton,
        BotaoRemover,
    } from './style'
import Footer from '../../../components/Footer';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const Restaurant = (props)=>{
  const [restaurant, setRestaurante] = useState()
  const [products, setProducts] = useState([])
  const params = useParams()

  useEffect(()=>{
    Axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${params.idRestaurant}`, {
      headers:{
        auth: window.localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setRestaurante(response.data.restaurant)
      setProducts(response.data.restaurant.products)
    })
  }, [])

  // addProductToCart = (productId) => {
  //   const productInCart = this.state.productInCart.find(product => productId === product.id)

  //   if(productInCart)
  // }

    return(
        <div>
            {restaurant ? <ContainerRestaurant>
              <Header/>
              <MainPhoto>
                  <ImgRestaurant src={props.restaurant.logoUrl} alt=''/>
              </MainPhoto>
                
                <ContainerTitle>
                  <Title>{props.restaurant.name}</Title>
                  <Paragraph>{props.restaurant.category}</Paragraph>
                </ContainerTitle>

                <ContainerTime>
                  <Paragraph>{props.restaurant.deliveryTime}</Paragraph>
                  <Paragraph>{props.restaurant.shipping}</Paragraph>
                </ContainerTime>

                <ContainerAddress>
                 <Paragraph>{props.restaurant.address}</Paragraph>
                </ContainerAddress>

                <ContainerMainTitle>
                    <MainTitle>Principais</MainTitle>
                </ContainerMainTitle>
            
                {products.map((product) =>{
                  return <Card>
                    <ImgFood src={product.photoUrl} alt=''/>
                   <ContainerMainFood>
                       <Title>{product.name}</Title>
                       <Ingredients>{product.description}</Ingredients>
                       <PriceAndButton>
                       <Price>{product.price}</Price>
                       <BotaoAdicionar variant="outlined" color="secondary" size='small'>adicionar</BotaoAdicionar>
                       </PriceAndButton>
                  </ContainerMainFood>  
                  </Card>
                })}
                <Footer />
                
              
            </ContainerRestaurant>: <div>Carregando ...</div>}
           
        </div>
    )
}

export default Restaurant;