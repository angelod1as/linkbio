import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import ILists from '../../../../dtos/ILists';

import Header from './Header';
import Social from './Social';
import Links from './Links';

const Styled = styled.div`
  margin: 40px 0;
`;

const Form = ({ social, header, links }: ILists) => {
  const { t } = useTranslation();
  return (
    <Styled>
      <h2>{t('Form header title')}</h2>
      <Header list={header.list} hook={header.hook} />
      <Social list={social.list} hook={social.hook} />
      <Links list={links.list} hook={links.hook} />
    </Styled>
  );
};

export default Form;
