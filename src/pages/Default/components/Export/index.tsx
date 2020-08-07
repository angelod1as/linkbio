import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const ExportDiv = styled.div``;

interface IProps {
  exported: boolean;
  setExported: React.Dispatch<React.SetStateAction<boolean>>;
}

const Export = ({ exported, setExported }: IProps) => {
  const [exportType, setExportType] = useState('url');

  const exportList = useCallback(() => {
    setExported(true);
  }, [setExported]);

  return (
    <ExportDiv>
      <h2>Export code or url</h2>
      <p>
        You can export a long URL or a ready-made HTML code for self-hosting.
      </p>
      <p>
        The <em>best</em> choice is self-hosting. It's easy to set up, just
        follow the tutorial.
      </p>
      <form>
        <label htmlFor="export-url">
          Export long URL
          <input
            type="radio"
            name="export"
            id="export-url"
            checked={exportType === 'url'}
            onChange={() => setExportType('url')}
          />
        </label>
        <label htmlFor="export-code">
          Export code for self-hosting
          <input
            type="radio"
            name="export"
            id="export-code"
            checked={exportType === 'code'}
            onChange={() => setExportType('code')}
          />
        </label>
      </form>

      <button type="submit" onClick={exportList}>
        Export
      </button>

      {exported ? 'exportado!' : 'esperando export'}

      {/* {exportType === 'url' ? (
        <input type="text" name="url" id="url-text" />
      ) : (
        <textarea name="export" id="export" cols={30} rows={10} />
      )} */}
    </ExportDiv>
  );
};

export default Export;
