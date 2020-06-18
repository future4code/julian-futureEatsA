import React from 'react';
import Header from '../../../components/Header'
import { ContainerAddress, Texto, Form, Input, Botao } from './style';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';


const Address = () => {
  const history = useHistory();
  const { form, onChange } = useForm({ rua: "", numero: "", bairro: "", cidade: "", estado: "", complemento: "" });

  const handleInputChange = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const onClickSalvar = event => {
    console.log(form.rua, form.numero, form.bairro, form.cidade, form.estado, form.complemento)
    const body = {
      street: form.rua,
      number: form.numero,
      neighbourhood: form.bairro,
      city: form.cidade,
      state: form.estado,
      complement: form.complemento
    }
    axios
      .put(
        'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address',
        body,
        {
          headers: {
            'auth': `${localStorage.token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      .then((response) => {
        alert('Endereço salvo com sucesso!')
        history.push("/home/feedPage");
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <ContainerAddress>
        <Header />
         <Form >
          <Texto>Meu Endereço</Texto>
         
          <Input
            type="text"
            placeholder="Rua/ Av."
            label="Logradouro"
            variant="outlined"
            required
            name="rua"
            value={form.rua}
            onChange={handleInputChange}
          />

          <Input
            type="text"
            placeholder="Número"
            label="Número"
            variant="outlined"
            required
            name="numero"
            value={form.numero}
            onChange={handleInputChange}
          />

          <Input
            type="text"
            placeholder="Apto./ Bloco"
            label="Complemento"
            variant="outlined"
            required
            name="complemento"
            value={form.complemento}
            onChange={handleInputChange}
          />

          <Input
            type="text"
            placeholder="Bairro"
            label="Bairro"
            variant="outlined"
            required
            name="bairro"
            value={form.bairro}
            onChange={handleInputChange}
          />

          <Input
            type="text"
            placeholder="Cidade"
            label="Cidade"
            variant="outlined"
            required
            name="cidade"
            value={form.cidade}
            onChange={handleInputChange}
          />

          <Input
            type="text"
            placeholder="Estado"
            label="Estado"
            variant="outlined"
            required
            name="estado"
            value={form.estado}
            onChange={handleInputChange}
          />

          <Botao onClick={onClickSalvar} variant="contained" color="primary" size="large">Salvar</Botao>
          
        </Form>
      </ContainerAddress>
    </div>
  )
}

export default Address;