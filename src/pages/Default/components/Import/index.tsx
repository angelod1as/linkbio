import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const ImportDiv = styled.div``;

interface IProps {
  setExported: React.Dispatch<React.SetStateAction<boolean>>;
}

const Import = ({ setExported }: IProps) => {
  const [importType, setImportType] = useState('url');

  const handleImport = useCallback(() => {
    setExported(false);
  }, [setExported]);

  return (
    <ImportDiv>
      <h2>Import code or url</h2>
      <p>
        If you already created a list, you can import and edit it using the
        fields below.
      </p>
      <p>Copy and paste the final url or the generated self-hosted code</p>
      <form>
        <label htmlFor="import-url">
          Import link
          <input
            type="radio"
            name="import"
            id="import-url"
            checked={importType === 'url'}
            onChange={() => setImportType('url')}
          />
        </label>
        <label htmlFor="import-code">
          Import code
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
        Import
      </button>
    </ImportDiv>
  );
};

export default Import;
