import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Trans, useTranslation } from 'react-i18next';
import IHeader from '../../../../../dtos/IHeader';

const Styled = styled.div``;

interface IProps {
  list: IHeader;
  hook: React.Dispatch<React.SetStateAction<IHeader>>;
}

const Header = ({ list, hook }: IProps) => {
  const { t } = useTranslation();
  const information = list;
  const setInformation = hook;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newInformation = { ...information };
      const { id, value } = e.target;

      newInformation[id] = value;

      setInformation(newInformation);
    },
    [setInformation, information],
  );

  return (
    <Styled>
      <h2>{t('Form header title')}</h2>

      <h3>{t('Header')}</h3>
      <label htmlFor="name">
        {t('Page name')}
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label htmlFor="image">
        {t('Photo')}
        <small>
          <Trans i18nKey="photo imgur">
            You can upload a picture using
            <a href="http://www.imgur.com" target="_blank" rel="noreferrer">
              imgur
            </a>
            . Post the final url here
          </Trans>
        </small>
        <input
          type="url"
          name="image"
          id="image"
          onChange={(e) => handleChange(e)}
        />
      </label>
    </Styled>
  );
};

export default Header;
