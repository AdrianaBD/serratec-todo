import React from 'react'
import { FiCircle, FiCheckCircle } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import { Title, Form, Tasks } from './styles';

const Tarefas = () => {
  return (
    <>
      <img src={logoImg} alt="Lista de Tarefas" />
      <Title>Lista de Tarefas</Title>

      <Form>
        <input type="text" placeholder="Digite a nova tarefa aqui..." />
        <button type="submit">Criar</button>
      </Form>

      <Tasks>
        <a href="teste">
          <strong>Aprender ReactJS</strong>
          <FiCircle size={22} />
        </a>

        <a href="teste">
          <strong>Aprender ReactJS</strong>
          <FiCircle size={22} />
        </a>

        <a href="teste">
          <strong>Aprender ReactJS</strong>
          <FiCircle size={22} />
        </a>
      </Tasks>
    </>
  )
}

export default Tarefas;