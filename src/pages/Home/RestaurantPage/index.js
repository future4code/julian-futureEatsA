import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import maosanta from '../../img/mao-santa.jpg';
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

const Restaurant = ()=>{
  const [restaurant, setRestaurante] = useState()
  
  const params = useParams()

  useEffect(()=>{
    Axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${params.idRestaurant}`, {
      headers:{
        auth: window.localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setRestaurante(response.data.restaurant)
    })
  }, [])

    return(
        <div>
            {restaurant ? <ContainerRestaurant>
              <Header/>
              <MainPhoto>
                  <ImgRestaurant src={restaurant.logoUrl} alt=''/>
              </MainPhoto>
                
                <ContainerTitle>
                  <Title>{restaurant.name}</Title>
                  <Paragraph>{restaurant.category}</Paragraph>
                </ContainerTitle>

                <ContainerTime>
                  <Paragraph>{restaurant.deliveryTime}</Paragraph>
                  <Paragraph>{restaurant.shipping}</Paragraph>
                </ContainerTime>

                <ContainerAddress>
                 <Paragraph>{restaurant.address}</Paragraph>
                </ContainerAddress>

                <ContainerMainTitle>
                    <MainTitle>Principais</MainTitle>
                </ContainerMainTitle>
                
                <Card>
                  <ImgFood src={maosanta} alt=''/>
                 <ContainerMainFood>
                     <Title>Bullguer</Title>
                     <Ingredients>Pão, carne. queijo, picles e molho.</Ingredients>
                     <PriceAndButton>
                     <Price>R$23,00</Price>
                     <BotaoAdicionar variant="outlined" color="secondary" size='small'> adicionar</BotaoAdicionar>
                     </PriceAndButton>
                </ContainerMainFood>  
                </Card>

                <Card>
                  <ImgFood src={maosanta} alt=''/>
                 <ContainerMainFood>
                     <Title>Stencil</Title>
                     <Ingredients>Pão, carne. queijo, picles e molho.</Ingredients>
                     <PriceAndButton>
                     <Price>R$23,00</Price>
                     <BotaoRemover variant="outlined" color="secondary" size='small'> Remover</BotaoRemover>
                     </PriceAndButton>
                </ContainerMainFood>  
                </Card>

                <ContainerMainTitle>
                    <MainTitle>Acompanhamentos</MainTitle>
                </ContainerMainTitle>

                <Card>
                  <ImgFood src={maosanta} alt=''/>
                 <ContainerMainFood>
                     <Title>Bullguer</Title>
                     <Ingredients>Pão, carne. queijo, picles e molho.</Ingredients>
                     <PriceAndButton>
                     <Price>R$23,00</Price>
                     <BotaoAdicionar variant="outlined" color="secondary" size='small'> adicionar</BotaoAdicionar>
                     </PriceAndButton>
                </ContainerMainFood>  
                </Card>

                <Card>
                  <ImgFood src={maosanta} alt=''/>
                 <ContainerMainFood>
                     <Title>Bullguer</Title>
                     <Ingredients>Pão, carne. queijo, picles e molho.</Ingredients>
                     <PriceAndButton>
                     <Price>R$23,00</Price>
                     <BotaoAdicionar variant="outlined" color="secondary" size='small'> adicionar</BotaoAdicionar>
                     </PriceAndButton>
                </ContainerMainFood>  
                </Card>
                <Footer />
                
              
            </ContainerRestaurant>: <div>Carregando ...</div>}
           
        </div>
    )
}

export default Restaurant;