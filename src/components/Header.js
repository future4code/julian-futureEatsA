import React from 'react';
import { ContainerHeader, TituloHeader } from './styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';

const Header = (props) => {
    return (
        <ContainerHeader>
            <IconButton>
                <ArrowBackIosIcon />
            </IconButton>
            <TituloHeader>{props.nomeDaPagina}</TituloHeader>
        </ContainerHeader>
    )
}

export default Header;