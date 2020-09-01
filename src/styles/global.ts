import { createGlobalStyle } from 'styled-components';

export const bp = {
  large: `(max-width: 1200px)`,
  medium: `(max-width: 900px)`,
  small: `(max-width: 600px)`,
};

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

`;
