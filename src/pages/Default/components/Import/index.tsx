import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ImportDiv = styled.div`
  margin: 40px 0;
`;

const Form = styled.form`
  margin: 40px 0;
`;

const Import = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [importType, setImportType] = useState('url');
  const [importContent, setImportContent] = useState('');
  const [error, setError] = useState('');

  const handleImport = useCallback(() => {
    if (importContent.includes('list?')) {
      const string = importContent.split('list?')[1];
      const url = `edit?${string}`;
      history.push(url);
    } else {
      setError(t('Import error'));
    }
  }, [importContent, history]);

  return (
    <ImportDiv>
      <h2>{t('Import title')}</h2>
      <p>{t('Import explanation 1')}</p>
      <p>{t('Import explanation 2')}</p>
      <Form>
        <label
          className={`button-label ${importType === 'url' ? 'checked' : ''}`}
          htmlFor="import-url"
        >
          {t('Import link')}
          <input
            type="radio"
            name="import"
            id="import-url"
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
              name="url"
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
              defaultValue="Not yet implemented :("
              readOnly
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
