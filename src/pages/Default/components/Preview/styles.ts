import styled from 'styled-components';
import { gold, blue } from '../../../../styles/global';

const white = '#e8e8e8';

const centerFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(centerFlex)`
  max-width: 620px;
  margin: 0 auto;
  color: ${white};
`;
export const Header = styled(centerFlex)`
  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid ${gold};
  }
  h1 {
    margin: 20px;
    font-size: 26px;
  }
`;

export const Social = styled(centerFlex)`
  flex-direction: row;
  a {
    transition: opacity 0.2s;
    margin: 0 5px;
    width: 30px;
    height: 30px;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Links = styled(centerFlex)`
  margin: 30px 0;
`;

export const LinkHolder = styled(centerFlex)`
  a {
    transition: all 0.2s;
    text-decoration: none;
    background-color: ${blue};
    border: 3px solid ${gold};
    margin: 10px 0;
    padding: 10px 30px;
    color: ${white};
    width: 100%;
    text-align: center;
    &:hover {
      color: ${blue};
      background-color: ${gold};
    }
  }
`;
