import React from 'react';
import Header from '../../../components/Header';
import lanche from '../../img/bullguer.jpg';
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

const Restaurant = ()=>{
    return(
        <div>
            <ContainerRestaurant>
              <Header/>
              <MainPhoto>
                  <ImgRestaurant src={lanche} alt=''/>
              </MainPhoto>
                
                <ContainerTitle>
                  <Title>Bullguer Vila Mariana</Title>
                  <Paragraph>Burguer</Paragraph>
                </ContainerTitle>

                <ContainerTime>
                  <Paragraph>50 - 60 min </Paragraph>
                  <Paragraph>Frete R$6,00</Paragraph>
                </ContainerTime>

                <ContainerAddress>
                 <Paragraph>R. Fradique Coutinho, 1136 - Vila Madalena</Paragraph>
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
                
              
            </ContainerRestaurant>
           
        </div>
    )
}

export default Restaurant;