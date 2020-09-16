import React, {useState} from 'react'

import logoImg from '../../assets/logo.png';

import { Container, Content, Form } from './styles';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("submit", email, password);

    
  }

  return (
    <Container>
      <Content>
        <img width="285px" src={logoImg} alt="Logo" />

        <Form onSubmit={handleSubmit} style={{ width: "315px" }}>
          <input 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
            type="email" 
            placeholder="E-mail" 
          />

          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Senha"
          />
          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        </Form>
      </Content>
    </Container>
  )
}

export default Login;