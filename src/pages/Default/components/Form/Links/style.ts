import styled from 'styled-components';

import { bp } from '../../../../../styles/global';

export const Styled = styled.div`
  margin: 20px 0;
  @media ${bp.medium} {
    margin-top: 30px;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-gap: 0 20px;
  grid-template-columns: repeat(2, 1fr);
  button {
    grid-column: span 2;
  }
  @media ${bp.medium} {
    display: block;
    label {
      margin-top: 15px;
    }
  }
`;

export const LinksContainer = styled.div``;

export const LinkHolder = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  background-color: var(--color-secondary);
  margin: 10px 0;
  border: 3px solid var(--color-tertiary);
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px 0px var(--color-tertiary);
  }
  p {
    margin: 0 10px;
    flex: 1;
    display: flex;
    align-items: center;
  }

  button {
    transition: 0.2s;
    border: 3px solid var(--color-tertiary);
    color: var(--color-tertiary);
    background-color: var(--color-primary);
    margin: 0 5px;
    flex: 0;
    padding: 2px 5px;
    &:hover {
      box-shadow: 5px 5px 5px 0px var(--color-primary);
    }
    & + button {
      margin: 0 5px;
    }
    @media ${bp.medium} {
      margin: 0 2px;
      & + button {
        margin: 0 2px;
      }
    }
  }
`;

export const Small = styled.small`
  grid-column: span 2;
`;
