import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
`

const Lab = styled.h1`
    color:white;
    margin-bottom: -12px;
    font-size: 3em;
    font-weight: normal;
`

const Eats = styled.h1`
    color: #5cb646;
    font-size: 3em;
`

const HomeScreenPage = () => {
    return (
        <Container>
            <div>
                <Lab>Labenu</Lab>
                <Eats>Eats</Eats>
            </div>
        </Container>
    )
}
export default HomeScreenPage