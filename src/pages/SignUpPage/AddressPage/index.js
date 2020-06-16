import React from 'react';
import Header from '../../../components/Header'
import {ContainerAddress, Texto, Form, Input, Botao} from './style';



const Address = () => {
  return(
    <div>
      <ContainerAddress>
        <Header/>
       <Form>
          <Texto>Meu Endereço</Texto>
          
                <Input
                type="text"
                onChange={''}
                placeholder="Rua/ Av." 
                label="Logradouro" 
                variant="outlined"
                required
                />

                <Input
                type="text"
                onChange={''}
                placeholder="Número" 
                label="Número" 
                variant="outlined"
                required
                />

                <Input
                type="text"
                onChange={''}
                placeholder="Apto./ Bloco" 
                label="Complemento" 
                variant="outlined"
                required
                />

               <Input
                type="text"
                onChange={''}
                placeholder="Bairro" 
                label="Bairro" 
                variant="outlined"
                required
                />

                <Input
                type="text"
                onChange={''}
                placeholder="Cidade" 
                label="Cidade" 
                variant="outlined"
                required
                />

                <Input
                type="text"
                onChange={''}
                placeholder="Estado" 
                label="Estado" 
                variant="outlined"
                required
                />

             <Botao variant="contained" color="primary" size="large">Salvar</Botao>
         </Form>
      </ContainerAddress>       
    </div>
  )
}

export default Address;