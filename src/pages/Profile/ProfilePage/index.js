import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios"

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import styled from 'styled-components'
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const Container = styled.div`
    width: 100vw;
    display: flex; 
    flex-direction: column;
    align-items: center;
`

const ContentContainer = styled.div`
    min-height: 80vh;
    width:100%;
`

const UpdateRegistrationContainer = styled.div`
border-bottom: 1px #00000073 solid;
width:100%;
display:flex;
align-items:center;
justify-content: space-between;
padding: 5vw;
box-shadow: inset 0 0 8px -3px #00000038;
`

const UpdateAdressContainer = styled.div`
border-bottom: 1px #0000006b solid;
width:100%;

display:flex;
justify-content: space-between;
align-items:center;
background-color: #eeeeee;
padding: 5vw;
box-shadow: inset 0 0 8px -3px #00000038;
`

const ResgiterContent = styled.div`

`

const AdressContent = styled.div`

`

const EditButtom = styled(IconButton)`
    font-size: 5vw;
    color:black;
`

const AdressLabel = styled.h3`
color:gray;
margin-bottom:2vw;
font-weight: normal;
`

const OrderHistory = styled.div`
padding: 5vw;

`

const TitleHistory = styled.h3`
border-bottom: 1px black solid;
padding-bottom: 2vw;
`

const CardContainer = styled.div`
    border: 1px gray solid;
    margin-top: 2vw;
    padding: 4vw;
    border-radius: 10px;
    display: flex;
    height: 28vw;
    flex-direction: column;
    justify-content: space-between;
`

const Restaurante = styled.h3`
    color: #5cb646;
    font-weight: normal;
`

const Valor = styled.h3`
`

const ProfilePage = (props) => {
    const history = useHistory();
    const [historicoVazio, setHistoricoVazio] = useState(true);
    const [profileInfo, setProfileInfo] = useState({})
    const [orderHistory, setOrderHistory] = useState([])

    const goToEditAdress = () => {
        history.push("/profile/UpdateAdress");
    }

    const goToEditRegister = () => {
        history.push("/profile/UpdateProfile");
    }

    const pegaPerfil = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth': `${localStorage.token}`
                    }
                }
            )
            .then((response) => {
                setProfileInfo(response.data.user)
            })
            .catch((error) => {
                alert(error.message)
            })

        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth': `${localStorage.token}`
                    }
                }
            )
            .then((response) => {
                setOrderHistory(response.data.orders)
                if (response.data.orders.length !== 0) {
                    setHistoricoVazio(false)
                } else {
                    setHistoricoVazio(true)
                }
            })
            .catch((error) => {
                alert(error.message)
            })

    }

    useEffect(() => {
        pegaPerfil()
    }, [])


    return (
        <Container>
            <Header nomeDaPagina={'Meu Perfil'} />
            <ContentContainer>
                <UpdateRegistrationContainer>
                    <ResgiterContent>
                        <p>{profileInfo.name}</p>
                        <p>{profileInfo.email}</p>
                        <p>{profileInfo.cpf}</p>
                    </ResgiterContent>
                    <EditButtom onClick={goToEditRegister}>
                        <EditIcon />
                    </EditButtom>
                </UpdateRegistrationContainer>
                <UpdateAdressContainer>
                    <AdressContent>
                        <AdressLabel>
                            Endereço cadastrado
                        </AdressLabel>
                        <p>{profileInfo.address}</p>
                    </AdressContent>
                    <EditButtom>
                        <EditIcon onClick={goToEditAdress} />
                    </EditButtom>
                </UpdateAdressContainer>
                <OrderHistory>
                    <TitleHistory>Histórico de Pedidos</TitleHistory>
                    {historicoVazio ? (
                        <p>Você não realizou nenhum pedido</p>
                    ) : (
                            <>
                                {orderHistory.map((pedido) => {
                                    let data = new Date(pedido.createdAt)
                                    let mes = null
                                    console.log(data.getMonth())
                                    switch (data.getMonth()) {
                                        case 0:
                                            mes = 'Janeiro'
                                            break;
                                        case 1:
                                            mes = 'Fevereiro'
                                            break;
                                        case 2:
                                            mes = 'Março'
                                            break;
                                        case 3:
                                            mes = 'Abril'
                                            break;
                                        case 4:
                                            mes = 'Maio'
                                            break;
                                        case 5:
                                            mes = 'Junho'
                                            break;
                                        case 6:
                                            mes = 'Julho'
                                            break;
                                        case 7:
                                            mes = 'Agosto'
                                            break;
                                        case 8:
                                            mes = 'Setembo'
                                            break;
                                        case 9:
                                            mes = 'Outubro'
                                            break;
                                        case 10:
                                            mes = 'Novembro'
                                            break;
                                        case 11:
                                            mes = 'Dezembro'
                                            break;
                                    }
                                    return (
                                        <CardContainer>
                                            <Restaurante>{pedido.restaurantName}</Restaurante>
                                    <p>{data.getDate()} de {mes} de {data.getFullYear()}</p>
                                            <Valor>SUBTOTAL R${pedido.totalPrice}</Valor>
                                        </CardContainer>
                                    )
                                })}

                            </>
                        )}
                </OrderHistory>
            </ContentContainer>
            <Footer />
        </Container>
    )
}
export default ProfilePage