import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';
import { gold, blue, pink } from '../../../../styles/global';
import A from '../../../../components/A';

const Styled = styled.footer`
  background-color: ${gold};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;

  a {
    color: ${blue};
    font-style: italic;
    transition: box-shadow 0.3s, background-color 0.3s;
    &:hover {
      box-shadow: 0px 0px 15px 10px ${pink};
      background-color: ${pink};
    }
  }
`;

const Footer = () => {
  return (
    <Styled>
      <Trans i18nKey="footer">
        <p>
          Developed by <A href="http://angelodias.com.br">Angelo Dias</A>.
          Contributions or feedback through{' '}
          <A href="http://www.github.com/angelod1as/linkbio">GitHub</A>. Make
          your own list <A href="http://angelod1as.github.io/linkbio/">here</A>.
        </p>
      </Trans>
    </Styled>
  );
};

export default Footer;
