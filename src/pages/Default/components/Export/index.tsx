import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ILists from '../../../../dtos/ILists';
import templates from './templates';

const Styled = styled.div`
  margin: 40px 0;
`;

interface IProps extends ILists {
  exported: boolean;
  setExported: React.Dispatch<React.SetStateAction<boolean>>;
}

const Export = ({ exported, setExported, social, header, links }: IProps) => {
  const { t } = useTranslation();
  const [exportType, setExportType] = useState('url');
  const [finalString, setFinalString] = useState('');

  const exportList = useCallback(() => {
    setExported(true);
    const string = templates({ social, header, links });
    setFinalString(string);
  }, [setExported, social, header, links]);

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
            onChange={() => {
              setExported(false);
              setExportType('url');
              setFinalString('');
            }}
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
            onChange={() => {
              setExported(false);
              setExportType('code');
              setFinalString('');
            }}
          />
        </label>
      </form>

      <button type="submit" onClick={exportList}>
        {t('Export')}
      </button>

      {finalString ? (
        <textarea
          name="export"
          id="export"
          cols={30}
          rows={10}
          value={finalString}
        />
      ) : (
        ''
      )}
    </Styled>
  );
};

export default Export;
