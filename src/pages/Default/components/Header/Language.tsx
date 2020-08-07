import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Styled = styled.div``;

const Language = ({ lang }: { lang: string }) => {
  const history = useHistory();

  const changeLanguage = useCallback(
    (newLang) => {
      history.push(newLang);
    },
    [history],
  );

  return (
    <Styled>
      <button
        type="button"
        disabled={lang === 'en'}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
      <button
        type="button"
        disabled={lang === 'ptbr'}
        onClick={() => changeLanguage('ptbr')}
      >
        Português
      </button>
    </Styled>
  );
};

export default Language;
