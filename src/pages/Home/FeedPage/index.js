import React from 'react'
import styled from 'styled-components'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

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
const FiltroVertical = styled.p`
    margin-right: 25px;
    margin-left: 25px;
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
    return(
        <ContainerFeed>
            <Header/>
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
                <FiltroVertical>Hamburguer</FiltroVertical>
                <FiltroVertical>Asiática</FiltroVertical>
                <FiltroVertical>Massas</FiltroVertical>
                <FiltroVertical>Saudaveis</FiltroVertical>
                <FiltroVertical>alguma coisa</FiltroVertical>
                <FiltroVertical>Alguma coisa</FiltroVertical>
            </ScrollVertical>
            <CardStyled>
                <CardMediaStyled
                image={null}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <p>Vinil Butantã</p>
                    <ContainerPrecoDinheiro>
                    <p>50-60 min</p>
                    <p>frete R$6,00</p>
                    </ContainerPrecoDinheiro>
                </CardContent>
            </CardStyled>
            <CardStyled>
                <CardMediaStyled
                image={null}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <p>Vinil Butantã</p>
                    <ContainerPrecoDinheiro>
                    <p>50-60 min</p>
                    <p>frete R$6,00</p>
                    </ContainerPrecoDinheiro>
                </CardContent>
            </CardStyled>
            <CardStyled>
                <CardMediaStyled
                image={null}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <p>Vinil Butantã</p>
                    <ContainerPrecoDinheiro>
                    <p>50-60 min</p>
                    <p>frete R$6,00</p>
                    </ContainerPrecoDinheiro>
                </CardContent>
            </CardStyled>
            <Footer/>
        </ContainerFeed>
    )
}

export default Feed;