import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaLock } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import wave from '../../assets/wave.png';
import posts from '../../assets/add_post.svg';
import avatar from '../../assets/avatar_login.svg';

import {
  Container,
  Content,
  FormLogin,
  EmailInput,
  PasswordInput,
} from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={wave} alt="wave-background" />
      <Content>
        <div>
          <img src={posts} alt="posts" className="image" />
        </div>
        <FormLogin>
          <Form schema={schema} onSubmit={handleSubmit}>
            <img src={avatar} alt="avatar" className="avatar" />
            <h2>Welcome</h2>
            <EmailInput>
              <div>
                <FaUser color="#d9d9d9" />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </EmailInput>
            <PasswordInput>
              <div>
                <FaLock color="#d9d9d9" />
              </div>
              <div>
                <Input
                  type="password"
                  name="password"
                  placeholder="Digite sua senha secreta"
                />
              </div>
            </PasswordInput>
            <button type="submit">{loading ? <FiLoader /> : 'Entrar'}</button>
          </Form>
        </FormLogin>
      </Content>
    </Container>
  );
}
