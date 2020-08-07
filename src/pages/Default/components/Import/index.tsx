import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ImportDiv = styled.div``;

interface IProps {
  setExported: React.Dispatch<React.SetStateAction<boolean>>;
}

const Import = ({ setExported }: IProps) => {
  const { t } = useTranslation();
  const [importType, setImportType] = useState('url');

  const handleImport = useCallback(() => {
    setExported(false);
  }, [setExported]);

  return (
    <ImportDiv>
      <h2>{t('Import title')}</h2>
      <p>{t('Import explanation 1')}</p>
      <p>{t('Import explanation 2')}</p>
      <form>
        <label htmlFor="import-url">
          {t('Import link')}
          <input
            type="radio"
            name="import"
            id="import-url"
            checked={importType === 'url'}
            onChange={() => setImportType('url')}
          />
        </label>
        <label htmlFor="import-code">
          {t('Import code')}
          <input
            type="radio"
            name="import"
            id="import-code"
            checked={importType === 'code'}
            onChange={() => setImportType('code')}
          />
        </label>
      </form>

      {importType === 'url' ? (
        <input type="text" name="url" id="url-text" />
      ) : (
        <textarea name="import" id="import" cols={30} rows={10} />
      )}

      <button type="submit" onClick={handleImport}>
        {t('Import')}
      </button>
    </ImportDiv>
  );
};

export default Import;
