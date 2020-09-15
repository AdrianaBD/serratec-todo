import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 36px;
  color: #3A3A3A;

  margin-top: 40px;
`;

export const Form = styled.form`
  margin-top: 25px;
  max-width: 700px;
  display: flex;

  input{
    flex: 1;
    height: 50px;
    padding: 0 25px;
    border: 0;
    border-radius: 5px 0 0 5px;
  }

  button{
    width: 120px;
    height: 50px;
    background: #04D361;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;

    &:hover{
      background: ${shade(0.2, '#04D361')}
    }
  }
`;