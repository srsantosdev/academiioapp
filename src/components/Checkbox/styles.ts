import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  input {
    display: none;
    cursor: pointer;
  }
  span {
    position: relative;
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    border: 0.3px solid #19d3da;
    border-radius: 0.4rem;
    transition: 0.2s;
  }
  input:checked + span {
    background: #19d3da;
    &:hover {
      background: ${shade(0.2, '#19D3DA')};
    }
    &::after {
      position: absolute;
      top: 0.1rem;
      left: 0.4rem;
      content: '';
      width: 0.4rem;
      height: 0.8rem;
      border: solid #fff;
      border-width: 0 0.2rem 0.2rem 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;
