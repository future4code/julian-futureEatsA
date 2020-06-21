import React, {useEffect} from 'react'
import Header from '../../../components/Header'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {useForm} from '../../../hooks/useForm'
import {ContainerUpdateProfile,
        FormStyled,
        TextFieldStyled,
        ButtonStyled} from './style';



const UpdateAdressPage = ()=>{
    const history = useHistory();
    const {form, onChange} = useForm({rua:'', numero: '', complemento: '', bairro: '', cidade: '', estado: ''})
    const token = localStorage.getItem('token')

    
    
    const onChangeForm = event =>{
        const {name, value} = event.target
        onChange(name, value)
    }
    const salvar = () =>{
        const body ={
            street: form.rua,
            number: form.numero,
            neighbourhood: form.bairro,
            city: form.cidade,
            state: form.estado,
            complement: form.complemento
        }
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address', body,{
            headers: {
                auth: token,
                "Content-Type": 'application/json'
            }
        }).then(response =>{
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
        }).catch(error=>{
            console.log(error)
        })
        console.log(body)
        history.push('/profile')
    }

    const getFullAddress = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address', {
            headers: {
                'auth': token
            }
        })
        .then((response) => {
            console.log(response.data.address)
            form.rua = `${response.data.address.street}`
            form.numero = `${response.data.address.number}`
            form.complemento = `${response.data.address.complement}`
            form.bairro = `${response.data.address.neighbourhood}`
            form.cidade = `${response.data.address.city}`
            form.estado = `${response.data.address.state}`
            onChange('estado', `${response.data.address.state}`)       
        })
        .catch((error) => {
            console.log(error.message)
        })
    };
     
    useEffect(() => {
        getFullAddress()
    }, [])
   
    const handleSubmit = event => {
        event.preventDefault();
      };


    return(
        <ContainerUpdateProfile>
            <Header nomeDaPagina={"Endereço"}/>
            <FormStyled onSubmit={handleSubmit}>

                <TextFieldStyled
                    name='rua'
                    value={form.rua}
                    onChange={onChangeForm}
                    variant="outlined"
                    label="Rua"
                    required
                    />
                <TextFieldStyled
                    name='numero'
                    value={form.numero}
                    onChange={onChangeForm}
                    variant="outlined"
                    label="Número"
                    type='number'
                    required
                    />
                <TextFieldStyled
                    name='complemento'
                    value={form.complemento}
                    onChange={onChangeForm}
                    variant="outlined"
                    label="complemento"
                    />
                <TextFieldStyled
                    name='bairro'
                    value={form.bairro}
                    onChange={onChangeForm}
                    variant="outlined"
                    label="Bairro"
                    required
                    />
                <TextFieldStyled
                    name='cidade'
                    value={form.cidade}
                    onChange={onChangeForm}
                    variant="outlined"
                    label="Cidade"
                    required
                    />
                <TextFieldStyled
                    name='estado'
                    value={form.estado}
                    onChange={onChangeForm}
                    variant="outlined"
                    label="Estado"
                    required
                    />
                <ButtonStyled type={'submit'} onClick={salvar}><b>Salvar</b></ButtonStyled>
            </FormStyled>
        </ContainerUpdateProfile>
    )
}

export default UpdateAdressPage