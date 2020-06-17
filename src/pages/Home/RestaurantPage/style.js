import styled from 'styled-components';


export const ContainerRestaurant = styled.div`
  width:100vw;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items:center;
`

export const MainPhoto = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 1rem;   
`
export const ImgRestaurant = styled.img`
   width:90%;
   height: 100%;

`

export const ContainerTitle = styled.div`
  width: 94vw;
  margin-left:1rem;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  `

export const Title = styled.h4`
  color:  #5cb646;
  font-weight: normal;
  font-size: 16px;
  padding-bottom: 8px;
`

export const Paragraph = styled.p`
  font-weight: normal;
  font-size: 16px;
  padding-bottom: 8px;
  color: #b8b8b8;
`

export const ContainerTime = styled.div`
   width:100vw;
   margin-right:4rem;
   padding-top: 5px;
   display: flex;
   justify-content:space-around;

`

export const ContainerAddress = styled.div`
  width: 94vw;
  margin-left:1rem;
  padding-top:4px;
  display: flex;
  justify-content: flex-start;
`

export const ContainerMainTitle = styled.div`
  width: 92vw;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 8px;
  padding-top: 1rem;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid black;
`

export const MainTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`
export const Card = styled.div`
   margin-top: 8px;
   display: flex;
   flex-direction:row;
   width: 93%;
   height:112px;
   border:1px solid #b8b8b8;
   border-radius:8px;
   
   
`
export const ImgFood = styled.img`
  height:auto;
  
`
export const ContainerMainFood = styled.div`
   width: 100%;
   display: flex;
   flex-direction:column;
   margin-top: 12px;
   padding-left: 16px;
      
  `
export const Ingredients = styled.p`
   font-size: 12px;
   color: #b8b8b8;
`
export const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
 `
export const BotaoAdicionar = styled.button`
  width: 90px;
  height: 32px;
  border-radius: 8px 0 8px 0 ;  
  border: solid 1px green;
  background:transparent;
  color: green;
  margin-top: 15px;      
`
export const PriceAndButton = styled.div`
   width:100%;
   height: 4rem;
   display: flex;
   justify-content: space-between;
   margin-top:10px;
 
`
export const BotaoRemover = styled.button`
  width: 90px;
  height: 32px;
  border-radius: 8px 0 8px 0 ;  
  border: solid 1px red;
  background:transparent;
  color: red;
  margin-top: 15px;  
`
