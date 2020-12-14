import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAnimation } from 'framer-motion';
import { BallSpinner } from 'react-spinners-kit';
import logoImg from '../../assets/logo.svg';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';

import { formAnimations } from './animations';
import { Container, FormContainer, Button } from './styles';

interface Credentials {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const controls = useAnimation();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: Credentials) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail Obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);

          controls.start('error');

          return;
        }

        console.log('Error');
      }
    },
    [controls],
  );

  useEffect(() => {
    controls.start('mounted');
  }, [controls]);

  return (
    <Container>
      <FormContainer
        variants={formAnimations}
        initial="unMounted"
        animate={controls}
        exit="unMounted"
      >
        <img src={logoImg} alt="Academiio" />
        <h1>Faça login para continuar.</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="email"
            label="E-mail"
            icon={FiMail}
            placeholder="Insira o seu e-mail"
          />
          <Input
            name="password"
            label="Senha"
            icon={FiLock}
            placeholder="Insira a sua senha"
          />

          <div className="checkbox-container">
            <Checkbox name="remember" />
            <span>Manter conectado</span>
          </div>

          <Button type="submit">
            {loading ? <BallSpinner size={24} color="#fbfbfb" /> : 'Entrar'}
          </Button>
        </Form>

        <footer>
          <p>
            Ainda não tem conta? <a href="/">Clique aqui</a>
          </p>
        </footer>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
