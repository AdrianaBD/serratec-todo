import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

import logoImg from '../../assets/logo.png';

const Header = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <img src={logoImg} alt="Lista de Tarefas" />

      <ul>
        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/tarefas">
            Tarefas
          </Link>
        </li>
        <li>
          <span onClick={() => signOut()}>
            Sair
          </span>
        </li>
      </ul>
    </Container>
  );
}

export default Header;