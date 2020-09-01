import styled from 'styled-components';

import { bp } from '../../styles/global';

import IColor from '../../dtos/IColor';

const shadowButton = `none`;
const shadowPressed = `5px 5px 0px 0px var(--color-tertiary)`;
const shadowButtonHover = `7px 7px 10px 0px var(--color-tertiary)`;
const shadowPressedHover = `7px 7px 10px 0px var(--color-secondary)`;

const button = `
  transition: .2s;
  transition: box-shadow .6s;
  color: var(--color-secondary);
  background: var(--color-tertiary);
  appearance: none;
  border: none;
  box-shadow: ${shadowButton};
  padding: 10px;
  margin: 10px 0;
  &:hover {
    color: var(--color-secondary);
    background: var(--color-tertiary);
    box-shadow: ${shadowPressedHover};
  }
`;

const pressedButton = `
  transition: .2s;
  transition: box-shadow .6s;
  box-shadow: ${shadowPressed};
  color: var(--color-tertiary);
  background: var(--color-secondary);
  &:hover {
    color: var(--color-tertiary);
    background: var(--color-secondary);
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

export const Container = styled.div<{
  isDisplay: boolean;
  colors: IColor;
}>`
  --color-primary: ${(pr) => pr.colors.primary};
  --color-secondary: ${(pr) => pr.colors.secondary};
  --color-tertiary: ${(pr) => pr.colors.tertiary};
  background: var(--color-primary);
  color: var(--color-tertiary);
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
    color: var(--color-tertiary);
    font-style: italic;
    transition: box-shadow 0.3s, background-color 0.3s;
    &:hover {
      box-shadow: 0px 0px 15px 10px var(--color-secondary);
      background-color: var(--color-secondary);
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
    box-shadow: inset 0px 0px 0px 3px var(--color-tertiary);
    padding: 10px;
    background-color: var(--color-primary);
    color: var(--color-tertiary);
    &[type='radio'] {
      display: none;
    }
    &:focus {
      background-color: var(--color-tertiary);
      color: var(--color-secondary);
      box-shadow: inset 0px 0px 3px 3px var(--color-primary);
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
  background-color: var(--color-tertiary);
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
  background-color: var(--color-tertiary);
  padding: 50px 50px 100px;
`;
