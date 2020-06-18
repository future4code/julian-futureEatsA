import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import ActiveOrder from './ActiveOrder'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


const ContainerFeed = styled.div`
    width: 100vw;
    display: flex; 
    flex-direction: column;
    align-items: center;
`
const TextFieldStyled = styled(TextField)`
    width: 90%;
`
const ScrollVertical = styled.div`
    width: 100%;
    overflow: auto;
    white-space: nowrap;
    height: 42px;
    display: flex;
    align-items: center;
    margin-top: 10px;
`
const ButtonStyled = styled(Button)`
    &&{
        padding-left:60px;
        padding-right: 60px;
    }
`
const CardStyled = styled(Card)`
    width: 90%;
    border: 1px solid gray;
    margin-bottom: 10px;
    margin-top: 10px;
`
const CardMediaStyled = styled(CardMedia)`
    height: 150px;
`
const ContainerPrecoDinheiro = styled.div`

    display: flex; 
    justify-content: space-between;
`

const Feed = ()=>{  
    const token = localStorage.getItem('token')
    const history = useHistory()
    const [restaurants, setRestaurants] = useState([])
    useEffect(()=>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants', {
            headers: {
                auth: token,
                'Content-Type': 'application/json'
            }
        }).then(response=>{
            console.log(response.data.restaurants)
            setRestaurants(response.data.restaurants)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const IrparaRestaurantsDetails = (id)=>{
        history.push(`/home/Restaurant/${id}`)
    }
    return(
        <ContainerFeed>
            <Header nomeDaPagina={'Labenu Eats'}/>
            <TextFieldStyled
            placeholder="Restaurante"
            variant="outlined" 
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon/>
                  </InputAdornment>
                ),
              }}
            />
            <ScrollVertical>
                <ButtonStyled>Hamburguer</ButtonStyled>
                <ButtonStyled>Asiática</ButtonStyled>
                <ButtonStyled>Massas</ButtonStyled>
                <ButtonStyled>Saudaveis</ButtonStyled>
                <ButtonStyled>alguma coisa</ButtonStyled>
                <ButtonStyled>Alguma coisa</ButtonStyled>
            </ScrollVertical>
            {restaurants.map(restaurant=>{
                return(
                    <CardStyled onClick={()=>{IrparaRestaurantsDetails(restaurant.id)}}>
                        <CardMediaStyled
                        image={restaurant.logoUrl}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                            <p>{restaurant.name}</p>
                            <ContainerPrecoDinheiro>
                            <p>{restaurant.deliveryTime} min</p>
                            <p>frete R${restaurant.shipping}.00</p>
                            </ContainerPrecoDinheiro>
                        </CardContent>
                    </CardStyled>
                )
            })}
           
            <Footer/>
        </ContainerFeed>
    )
}

export default Feed;