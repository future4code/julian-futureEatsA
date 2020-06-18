import React from 'react';
import { ContainerHeader, TituloHeader } from './styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import {useHistory} from 'react-router-dom'

const Header = (props) => {
    const history = useHistory()
    
    return (
        <ContainerHeader>
            <IconButton onClick={history.goBack}>
                <ArrowBackIosIcon />
            </IconButton>
            <TituloHeader>{props.nomeDaPagina}</TituloHeader>
        </ContainerHeader>
    )
}

export default Header;