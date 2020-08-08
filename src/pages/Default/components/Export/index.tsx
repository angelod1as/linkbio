import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ILists from '../../../../dtos/ILists';
import templates from './templates';
import api from '../../../../services/api';

const Styled = styled.div`
  margin: 40px 0;
`;

const Export = ({ social, header, links }: ILists) => {
  const { t } = useTranslation();
  const [exportType, setExportType] = useState('url');
  const [finalString, setFinalString] = useState('');
  const [shortened, setShortened] = useState('');
  const [error, setError] = useState('');

  const shorten = useCallback(() => {
    api
      .post(
        'https://api-ssl.bitly.com/v4/shorten',
        {
          group_guid: 'Bk42nAyCf1T',
          domain: 'bit.ly',
          long_url: finalString,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        setShortened(response.data.link);
      })
      .catch(() => {
        setError(t('There was some error. Let the developer know'));
      });
  }, [finalString, t]);

  const exportList = useCallback(
    (type) => {
      const string = templates(type, { social, header, links });
      setFinalString(string);
    },
    [social, header, links],
  );

  useEffect(() => {
    const string = templates('url', { social, header, links });
    setFinalString(string);
  }, [exportList, social, header, links]);

  const handleChange = useCallback(
    (type) => {
      setFinalString('');
      setExportType(type);
      exportList(type);
    },
    [exportList],
  );

  return (
    <Styled>
      <h2>{t('Export title')}</h2>
      <p>{t('Export explanation 1')}</p>
      <p>{t('Export explanation 2')}</p>
      <form>
        <label
          className={`button-label ${exportType === 'url' ? 'checked' : ''}`}
          htmlFor="export-url"
        >
          {t('Export long URL')}
          <input
            type="radio"
            name="export"
            id="export-url"
            checked={exportType === 'url'}
            onChange={() => handleChange('url')}
          />
        </label>
        <label
          className={`button-label ${exportType === 'code' ? 'checked' : ''}`}
          htmlFor="export-code"
        >
          {t('Export code for self-hosting')}
          <input
            type="radio"
            name="export"
            id="export-code"
            checked={exportType === 'code'}
            onChange={() => handleChange('code')}
          />
        </label>
      </form>

      <textarea
        name="export"
        id="export"
        cols={30}
        rows={10}
        readOnly
        value={finalString}
      />

      <button type="button" onClick={shorten}>
        {t('Get short link (by bitly')}
      </button>

      {error ? <small>{error}</small> : ''}

      {shortened ? (
        <input
          type="text"
          name="shortened"
          id="shortened"
          defaultValue={shortened}
          readOnly
        />
      ) : (
        ''
      )}
    </Styled>
  );
};

export default Export;
