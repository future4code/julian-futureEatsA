import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Lab = styled.h1`

`

const Eats = styled.h1`
    color: green;
`

const HomeScreenPage = ()=>{
    return(
        <Container>
            <Lab>Lab</Lab>
            <Eats>Eats</Eats>
        </Container>
    )
}
export default HomeScreenPage