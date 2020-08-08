import { createGlobalStyle } from 'styled-components';

export const pink = '#F2A0AF';
export const blue = '#03258C';
export const gold = '#F2CB05';
const shadowButton = `none`;
const shadowPressed = `5px 5px 0px 0px ${blue}`;
const shadowButtonHover = `7px 7px 10px 0px ${blue}`;
const shadowPressedHover = `7px 7px 10px 0px ${gold}`;

const button = `
  transition: .2s;
  transition: box-shadow .6s;
  color: ${gold};
  background: ${blue};
  appearance: none;
  border: none;
  box-shadow: ${shadowButton};
  padding: 10px;
  margin: 10px 0;
  &:hover {
    color: ${gold};
    background: ${blue};
    box-shadow: ${shadowPressedHover};
  }
`;

const pressedButton = `
  transition: .2s;
  transition: box-shadow .6s;
  box-shadow: ${shadowPressed};
  color: ${blue};
  background: ${gold};
  &:hover {
    color: ${blue};
    background: ${gold};
    box-shadow: ${shadowButtonHover};
  }
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${pink};
    color: ${blue};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  a {
    color: ${blue};
    font-style: italic;
    transition: box-shadow .3s, background-color .3s;
    &:hover{
      box-shadow: 0px 0px 15px 10px ${gold};
      background-color: ${gold};
    }
  }

  button {
    cursor: pointer;
    ${button}
    & + button {
      margin-left: 20px;
    }

    &:disabled {
      ${pressedButton}
    }
  }

  label.button-label {
    cursor: pointer;
    display: inline-block;
    transition: .1s;
    ${button}
    & + label {
      margin-left: 20px;
    }
    &.checked {
      ${pressedButton}
    }
  }

  input, textarea {
    width: 100%;
    display: block;
    transition: .3s;
    transition: width 0s;
    border: none;
    box-shadow: inset 0px 0px 0px 3px ${blue};
    padding: 10px;
    background-color: ${pink};
    color: ${blue};
    &[type=radio] {
      display: none;
    }
    &:focus {
      background-color: ${blue};
      color: ${gold};
      box-shadow: inset 0px 0px 3px 3px ${pink};
    }
  }

  textarea + button {
    display: block;
    margin-left: 0;
  }

  label,
  small,
  input {
    display: block;
    margin: 5px 0;
  }
`;
