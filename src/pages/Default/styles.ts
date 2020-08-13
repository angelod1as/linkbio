import styled from 'styled-components';

import { pink, blue, gold, bp } from '../../styles/global';

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

const noScroll = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media ${bp.medium} {
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const Container = styled.div<{ isDisplay: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${({ isDisplay }) => (isDisplay ? 'display: block;' : '')}
  @media ${bp.medium} {
    display: block;
  }
`;

export const EditPanel = styled(noScroll)`
  overflow-y: scroll;
  height: 100vh;
  @media ${bp.medium} {
    min-height: 100vh;
    height: 100%;
  }
  padding: 0;
  padding: 50px 20px;

  & > div {
    max-width: 620px;
    margin: 0 auto;
  }

  a {
    color: ${blue};
    font-style: italic;
    transition: box-shadow 0.3s, background-color 0.3s;
    &:hover {
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
    transition: 0.1s;
    ${button}
    & + label {
      margin-left: 20px;
    }
    &.checked {
      ${pressedButton}
    }
  }

  input,
  textarea {
    width: 100%;
    display: block;
    transition: 0.3s;
    transition: width 0s;
    border: none;
    box-shadow: inset 0px 0px 0px 3px ${blue};
    padding: 10px;
    background-color: ${pink};
    color: ${blue};
    &[type='radio'] {
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

  p,
  li {
    margin: 10px 0;
  }
`;

export const PreviewPanel = styled(noScroll)`
  overflow-y: scroll;
  height: 100vh;
  @media ${bp.medium} {
    min-height: 100vh;
    height: 100%;
  }
  margin: 0;
  background-color: ${blue};
  padding: 50px 20px 100px;
`;

export const TutorialPanel = styled(noScroll)`
  overflow-y: scroll;
  height: 100vh;
  @media ${bp.medium} {
    min-height: 100vh;
    height: 100%;
  }
  margin: 0;
  background-color: ${blue};
  padding: 50px 50px 100px;
`;
