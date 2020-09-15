import React from 'react'

import logoImg from '../../assets/logo.png';

import { Title, Form } from './styles';

const Tarefas = () => {
  return (
    <>
      <img src={logoImg} alt="Lista de Tarefas" />
      <Title>Lista de Tarefas</Title>

      <Form>
        <input type="text" placeholder="Digite a nova tarefa aqui..." />
        <button type="submit">Criar</button>
      </Form>
    </>
  )
}

export default Tarefas;