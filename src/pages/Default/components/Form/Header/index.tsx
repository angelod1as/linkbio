import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Trans, useTranslation } from 'react-i18next';
import IHeader from '../../../../../dtos/IHeader';
import A from '../../../../../components/A';

const Styled = styled.div`
  margin: 20px 0;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

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
      <h3>{t('Header')}</h3>

      <Form>
        <label htmlFor="name">
          {t('Page name')}
          <small>{t('Page name explanation')}</small>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleChange(e)}
            value={list.name}
          />
        </label>

        <label htmlFor="image">
          {t('Photo')}
          <small>
            <Trans i18nKey="photo imgur">
              You can use
              <A href="http://www.imgur.com">imgur</A>
            </Trans>
          </small>
          <input
            type="url"
            name="image"
            id="image"
            onChange={(e) => handleChange(e)}
            value={list.image}
          />
        </label>
      </Form>
    </Styled>
  );
};

export default Header;
