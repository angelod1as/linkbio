import styled from 'styled-components';
import { bp } from '../../../../../styles/global';

export const Styled = styled.div`
  margin: 20px 0;
  @media ${bp.medium} {
    margin-top: 30px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 0 20px;
  grid-template-columns: repeat(3, 1fr);
  @media ${bp.medium} {
    display: block;
    label {
      margin-top: 15px;
    }
  }
`;

export const ColorStyle = styled.div<{
  last: boolean;
}>`
  width: 100%;
  & > div {
    margin-top: 10px;
    width: 100%;
    & :hover {
      box-shadow: 7px 7px 10px 0px
        ${(pr) =>
          pr.last ? 'var(--color-secondary)' : 'var(--color-tertiary)'};
    }
  }
  span {
    transition: box-shadow 0.2s;
    width: 100%;
    height: 50px;
    border-radius: 0;
    border: 0;
    padding: 0;
    box-shadow: 0 0 0px 3px
      ${(pr) => (pr.last ? 'var(--color-secondary)' : 'var(--color-tertiary)')};
  }
`;
