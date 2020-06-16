import React from 'react';
import {Bar, Texto, Form, Input} from './style';
import BackButton from '@material-ui/icons/ArrowBackIos';
import Button from  '@material-ui/core/Button';

const Address = () => {
  return(
    <div>
      <Bar>
        <BackButton/>
      </Bar>  
      
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

             <Button variant="contained" color="primary">Salvar</Button>
         </Form>
    </div>
  )
}

export default Address;