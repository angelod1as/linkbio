import styled from 'styled-components';

import { gold, blue, pink } from '../../../../../styles/global';

export const Styled = styled.div`
  margin: 20px 0;
`;

export const Form = styled.form`
  display: grid;
  grid-gap: 0 20px;
  grid-template-columns: repeat(2, 1fr);
  button {
    grid-column: span 2;
  }
`;

export const LinksContainer = styled.div``;

export const LinkHolder = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  background-color: ${gold};
  margin: 10px 0;
  border: 3px solid ${blue};
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px 0px ${blue};
  }
  p {
    margin: 0 10px;
    flex: 1;
    display: flex;
    align-items: center;
  }

  button {
    transition: 0.2s;
    border: 3px solid ${blue};
    color: ${blue};
    background-color: ${pink};
    margin: 0 5px;
    flex: 0;
    &:hover {
      box-shadow: 5px 5px 5px 0px ${pink};
    }
    & + button {
      margin: 0 5px;
    }
  }
`;
