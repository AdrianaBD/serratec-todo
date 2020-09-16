import React, {useState} from 'react'
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.png';

import { Container, Content, WrapperForm } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email valido!')
    .required('O email é obrigatorio'),
  password: Yup.string().required('A senha é obrigatoria'),
});

const Login = () => {
  const [loading, setLoading] = useState(false);

  function handleSubmit({ email, password }) {

  }

  return (
    <Container>
      <Content>
        <img width="285px" src={logoImg} alt="Logo" />

        <WrapperForm>
          <Form schema={schema} onSubmit={handleSubmit} style={{ width: "315px" }}>
            <input name="email" type="email" placeholder="E-mail" />
            <input
              name="password"
              type="password"
              placeholder="Senha"
            />
            <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>

            {/* <Link to="/forgot-password"><TextLink>Esqueci minha senha</TextLink></Link>
            <Link to="/"><TextLink>Criar conta gratuita</TextLink></Link> */}
          </Form>
        </WrapperForm>
      </Content>
    </Container>
  )
}

export default Login;