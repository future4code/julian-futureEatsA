import React from 'react'
import { Icon, ContainerFooter } from './styles'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";


const Footer = () => {
    const history = useHistory();

    const goToHome = () => {
        history.push("/home/feedPage");
    }
    const goToCart = () => {
        history.push("/cart");
    }
    const goToProfile = () => {
        history.push("/profile");
    }
    return (
            <ContainerFooter>
                <IconButton onClick={goToHome}>
                    <HomeIcon
                        style={{ fontSize: 40 }} />
                </IconButton>
                <IconButton onClick={goToCart}>
                    <ShoppingCartIcon
                        style={{ fontSize: 40 }} />
                </IconButton>
                <IconButton onClick={goToProfile}>
                    <PersonIcon
                        style={{ fontSize: 40 }} />
                </IconButton>
            </ContainerFooter>
    )
}

export default Footer;