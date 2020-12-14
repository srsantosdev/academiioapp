import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    height: 100vh;
    background: #f0f0ef;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1.6rem 'Poppins', sans-serif;
    color: #222;
  }

  button {
    cursor: pointer;
  }
`;
