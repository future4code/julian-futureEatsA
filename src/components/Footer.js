import React from 'react'
import { Icon, ContainerFooter } from './styles'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';


const Footer = () => {
    return (
            <ContainerFooter>
                <IconButton>
                    <HomeIcon
                        style={{ fontSize: 40 }} />
                </IconButton>
                <IconButton>
                    <ShoppingCartIcon
                        style={{ fontSize: 40 }} />
                </IconButton>
                <IconButton>
                    <PersonIcon
                        style={{ fontSize: 40 }} />
                </IconButton>
            </ContainerFooter>
    )
}

export default Footer;