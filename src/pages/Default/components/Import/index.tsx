import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import importCode from './importCode';
import ISocial from '../../../../dtos/ISocial';
import IHeader from '../../../../dtos/IHeader';
import ILinks from '../../../../dtos/ILinks';

const ImportDiv = styled.div`
  margin: 40px 0;
`;

const Form = styled.form`
  margin: 10px 0 40px;
`;

interface IParams {
  setSocialList: React.Dispatch<React.SetStateAction<ISocial>>;
  setHeaderList: React.Dispatch<React.SetStateAction<IHeader>>;
  setLinkList: React.Dispatch<React.SetStateAction<ILinks[]>>;
}

const Import = ({ setSocialList, setHeaderList, setLinkList }: IParams) => {
  const { t } = useTranslation();
  const history = useHistory();
  const [importType, setImportType] = useState('url');
  const [importContent, setImportContent] = useState('');
  const [error, setError] = useState('');

  const handleImport = useCallback(() => {
    // If URL
    if (importType === 'url') {
      if (importContent.includes('list?')) {
        const string = importContent.split('list?')[1];
        const url = `edit?${string}`;
        history.push(url);
      } else {
        setError(t('Import error'));
      }
      // If valid code
    } else if (importContent.includes('<!--LINKBIO-CONTENT-->')) {
      const { header, social, links } = importCode(importContent);
      setHeaderList(header);
      setSocialList(social);
      setLinkList(links);
      setImportContent('');

      // not url nor invalid code
    } else {
      setError(t('Import error - no Linkbio'));
    }
  }, [
    setHeaderList,
    setSocialList,
    setLinkList,
    importType,
    importContent,
    history,
    t,
  ]);

  return (
    <ImportDiv>
      <h2>{t('Import title')}</h2>
      <p>{t('Import explanation 1')}</p>
      <p>{t('Import explanation 2')}</p>
      <Form>
        <label
          className={`button-label ${importType === 'url' ? 'checked' : ''}`}
          htmlFor="import-URL"
        >
          {t('Import link')}
          <input
            type="radio"
            name="import"
            id="import-URL"
            checked={importType === 'url'}
            onChange={() => {
              setImportType('url');
              setError('');
            }}
          />
        </label>
        <label
          className={`button-label ${importType === 'code' ? 'checked' : ''}`}
          htmlFor="import-code"
        >
          {t('Import code')}
          <input
            type="radio"
            name="import"
            id="import-code"
            checked={importType === 'code'}
            onChange={() => {
              setImportType('code');
              setError('');
            }}
          />
        </label>

        <div>
          {importType === 'url' ? (
            <input
              type="text"
              name="URL"
              id="url-text"
              onChange={(e) => setImportContent(e.target.value)}
              value={importContent}
            />
          ) : (
            <textarea
              name="import"
              id="import"
              cols={30}
              rows={10}
              onChange={(e) => setImportContent(e.target.value)}
              value={importContent}
            />
          )}

          {error ? <small>{error}</small> : ''}

          <button type="button" onClick={handleImport}>
            {t('Import')}
          </button>
        </div>
      </Form>
    </ImportDiv>
  );
};

export default Import;
