import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Styled = styled.div``;
const Title = styled.h2``;
const Explanation = styled.div``;

const Header = () => {
  const { t } = useTranslation();
  return (
    <Styled>
      <Title>{t('Create your link list')}</Title>
      <Explanation>
        <h2>{t('How to use')}</h2>
        <p>{t('How to use explanation')}</p>
      </Explanation>
    </Styled>
  );
};

export default Header;
