import styled from 'styled-components';

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
  color: var(--color-primary);
`;
export const Header = styled(centerFlex)`
  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--color-secondary);
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
    /* background-color: var(--color-primary); */
    border-radius: 50%;
    svg {
      path {
        fill: var(--color-primary);
      }
    }
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
    background-color: var(--color-tertiary);
    border: 3px solid var(--color-secondary);
    margin: 10px 0;
    padding: 10px 30px;
    color: var(--color-primary);
    width: 100%;
    text-align: center;
    &:hover {
      color: var(--color-tertiary);
      background-color: var(--color-secondary);
    }
  }
`;
