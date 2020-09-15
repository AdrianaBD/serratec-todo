import React from 'react'

import logoImg from '../../assets/logo.png';

import { Title } from './styles';

const Tarefas = () => {
  return (
    <>
      <img src={logoImg} alt="Lista de Tarefas" />
      <Title>Tarefas</Title>
    </>
  )
}

export default Tarefas;