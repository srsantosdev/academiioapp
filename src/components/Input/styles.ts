import styled, { css } from 'styled-components';

interface FieldProps {
  isFocused?: boolean;
  isFilled?: boolean;
  hasError?: boolean;
}

interface ContainerProps {
  hasError?: boolean;
  isFocused?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.8rem;

    > label {
      display: block;
      font-size: 1.6rem;
      color: #222427;
    }

    > p.error {
      color: #c53030;
      font-size: 1.2rem;
    }

    ${props =>
      props.hasError &&
      css`
        > label {
          color: #c53030;
          font-weight: 500;
        }
      `}

    ${props =>
      props.isFocused &&
      css`
        > label {
          color: #19d3da;
          font-weight: 500;
        }
      `}
  }

  & + div {
    margin-top: 1.6rem;
  }
`;

export const Field = styled.div<FieldProps>`
  background: none;
  border-radius: 0.5rem;
  border: 1px solid #1c2128;
  display: flex;
  align-items: center;

  padding: 1.4rem;

  > svg {
    color: #222;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #19d3da;
      border-color: #19d3da;

      > svg {
        color: #19d3da;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #19d3da;

      > svg {
        color: #19d3da;
      }
    `}

    ${props =>
    props.hasError &&
    css`
      border-color: #c53030;

      > svg {
        color: #c53030;
      }
    `}

  > input {
    background: none;
    border: 0;
    flex: 1;
    padding-left: 0.8rem;
  }
`;
