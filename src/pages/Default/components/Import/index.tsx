import React, { useState } from 'react';
import styled from 'styled-components';

const ImportDiv = styled.div``;

const Import: React.FC = () => {
  const [importType, setImportType] = useState('url');

  return (
    <ImportDiv>
      <h2>Import code or url</h2>
      <p>
        If you already created a list, you can import and edit it using the
        fields below.
      </p>
      <p>Copy and paste the final url or the generated self-hosted code</p>
      <form>
        <label htmlFor="url">
          Import link
          <input
            type="radio"
            name="import"
            id="url"
            checked={importType === 'url'}
            onChange={() => setImportType('url')}
          />
        </label>
        <label htmlFor="code">
          Import code
          <input
            type="radio"
            name="import"
            id="code"
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

      <button type="submit">Import</button>
    </ImportDiv>
  );
};

export default Import;
