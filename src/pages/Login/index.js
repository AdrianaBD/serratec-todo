import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.png';

import { Container, Content, Form } from './styles';

const Login = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if(!email) return;
    if(!password) return;
    
    setLoading(true);

    console.log("submit", email, password);

    try {
      await signIn({
        email: email,
        password: password,
      });

      history.push('/dashboard');  

    } catch (error) {
      console.log(error);
      console.log("Usuário ou senha não confere.");

    } finally {
      setLoading(false);
    }
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