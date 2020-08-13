import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ISocial from '../../../../../dtos/ISocial';

import { bp } from '../../../../../styles/global';

const Styled = styled.div`
  margin: 20px 0;
  @media ${bp.medium} {
    margin-top: 30px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-gap: 0 20px;
  grid-template-columns: repeat(2, 1fr);
  @media ${bp.medium} {
    display: block;
    label {
      margin-top: 15px;
    }
  }
`;

interface IProps {
  list: ISocial;
  hook: React.Dispatch<React.SetStateAction<ISocial>>;
}

const Social = ({ list, hook }: IProps) => {
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
      <h3>{t('Social')}</h3>
      <small>{t('Full urls')}</small>
      <Form>
        <label htmlFor="instagram">
          {t('Instagram url')}
          <input
            type="text"
            name="instagram"
            id="instagram"
            onChange={(e) => handleChange(e)}
            value={list.instagram}
          />
        </label>

        <label htmlFor="twitter">
          {t('Twitter url')}
          <input
            type="text"
            name="twitter"
            id="twitter"
            onChange={(e) => handleChange(e)}
            value={list.twitter}
          />
        </label>

        <label htmlFor="facebook">
          {t('Facebook url')}
          <input
            type="text"
            name="facebook"
            id="facebook"
            onChange={(e) => handleChange(e)}
            value={list.facebook}
          />
        </label>

        <label htmlFor="linkedin">
          {t('LinkedIn url')}
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            onChange={(e) => handleChange(e)}
            value={list.linkedin}
          />
        </label>
      </Form>
    </Styled>
  );
};

export default Social;
