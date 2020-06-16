import React from 'react';
import Header from '../../../components/Header'
import {ContainerRestaurant, FotoPrincipal, ImgRestaurant} from './style'
import lanche from '../../img/bullguer.jpg'

const Restaurant = ()=>{
    return(
        <div>
            <ContainerRestaurant>
              <Header/>
              <FotoPrincipal>
                  <ImgRestaurant src={lanche} alt=''/>
              </FotoPrincipal>
              <div>
                  <h4>Bullguer Vila Mariana</h4>
                  <p>Burguer</p>
                  <p>50 - 60 min </p>
                  

              </div>
            </ContainerRestaurant>
           
        </div>
    )
}

export default Restaurant;