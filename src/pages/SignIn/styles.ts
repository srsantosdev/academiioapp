import styled from 'styled-components';
import { shade } from 'polished';
import { motion } from 'framer-motion';

export const Container = styled.div`
  height: 100vh;
  background-color: #19d3da;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled(motion.main)`
  width: 60rem;
  background: #fbfbfb;
  box-shadow: 0px 4px 4px rgba(40, 40, 40, 0.25);
  border-radius: 10px;

  padding: 2.4rem;

  > h1 {
    font-weight: 600;
    font-size: 1.8rem;
    margin-bottom: 1.6rem;
  }

  > form {
    > div.checkbox-container {
      margin: 1.6rem 0;

      display: flex;
      align-items: center;

      > span {
        display: block;
        margin-left: 0.8rem;
      }
    }
  }

  > footer {
    margin-top: 3.2rem;

    a {
      text-decoration: none;
      color: #19d3da;
      font-weight: 600;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  border-radius: 0.5rem;
  color: #fbfbfb;
  font-weight: 500;

  background: #19d3da;
  width: 100%;
  height: 4rem;

  padding: 0.8rem;

  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.2, '#19d3da')};
  }
`;
