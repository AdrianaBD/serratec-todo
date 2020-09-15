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
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button{
    width: 120px;
    height: 50px;
    background: #04D361;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover{
      background: ${shade(0.2, '#04D361')}
    }
  }
`;

export const Tasks = styled.div`
  margin-top: 70px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    display: block;
    padding: 25px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.5s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }


`;