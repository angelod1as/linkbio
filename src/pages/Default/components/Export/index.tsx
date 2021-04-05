import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation, Trans } from 'react-i18next';
import ILists from '../../../../dtos/ILists';
import templates from './components';
// import api from '../../../../services/api';

import { bp } from '../../../../styles/global';

const Styled = styled.div`
  margin: 40px 0;
  @media ${bp.medium} {
    label.button-label {
      margin: 10px 0 5px 0;
      & + label {
        margin: 10px 0;
      }
    }
  }
`;

const LinkOrCode = styled.div`
  h3 {
    margin: 20px 0;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 20px;
    @media ${bp.medium} {
      display: block;
    }
  }

  h4 {
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: square;
    margin-bottom: 20px;
    margin-left: 20px;
  }
`;

interface IProps extends ILists {
  setIsTutorial: React.Dispatch<React.SetStateAction<boolean>>;
  isTutorial: boolean;
}

const Export = ({
  social,
  header,
  links,
  color,
  setIsTutorial,
  isTutorial,
}: IProps) => {
  const { t } = useTranslation();
  const [exportType, setExportType] = useState('url');
  const [finalString, setFinalString] = useState('');
  const [shortened, setShortened] = useState('');
  // const [error, setError] = useState('');

  // const shorten = useCallback(() => {
  //   setShortened('');
  //   const encoded = encodeURIComponent(finalString);
  //   const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  //   api
  //     .get(
  //       `${corsProxy}https://tinyurl.com/create.php?source=create&url=${encoded}`,
  //     )
  //     .then(({ data }) => {
  //       const url = data
  //         .split('data-clipboard-text="')[1]
  //         .split('"><small>')[0];
  //       setShortened(url);
  //     })
  //     .catch((err) => setError(`${t(`Export error`)}: ${err}`));
  // }, [finalString, t]);

  const exportList = useCallback(
    (type) => {
      const string = templates(type, { social, header, links, color });
      setFinalString(string);
    },
    [social, header, links, color],
  );

  useEffect(() => {
    const string = templates('url', { social, header, links, color });
    setFinalString(string);
  }, [exportList, social, header, links, color]);

  const handleChange = useCallback(
    (type) => {
      setFinalString('');
      setShortened('');
      setExportType(type);
      exportList(type);
    },
    [exportList],
  );

  const tutorial = useCallback(() => {
    setIsTutorial(!isTutorial);
  }, [setIsTutorial, isTutorial]);

  return (
    <Styled>
      <h2>{t('Export title')}</h2>
      <form>
        <label
          className={`button-label ${exportType === 'url' ? 'checked' : ''}`}
          htmlFor="export-URL"
        >
          {t('Export long URL')}
          <input
            type="radio"
            name="export"
            id="export-URL"
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

      {exportType === 'url' ? (
        <a
          href="https://tinyurl.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button type="button">{t('Get short')}</button>
        </a>
      ) : (
        ''
      )}
      <div>
        <button type="button" onClick={tutorial}>
          {isTutorial ? t('Close tutorial') : t('See tutorial')}
        </button>
      </div>

      {/* {error ? <small>{error}</small> : ''} */}

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

      <LinkOrCode>
        <h3>{t('Link or code')}</h3>
        <div>
          <div>
            <Trans i18nKey="Link explanation">
              <h4>Link:</h4>
              <ul>
                <li>
                  <b>Pros:</b>easy as click-copy-paste. Get the provided URL —
                  or it's shortened version — and paste it wherever you like.
                </li>
                <li>
                  <b>Cons:</b> Every time you change your list, you will need to
                  change the links everywhere.
                </li>
              </ul>
            </Trans>
          </div>
          <div>
            <Trans i18nKey="Code explanation">
              <h4>Link:</h4>
              <ul>
                <li>
                  <b>Pros:</b>easy as click-copy-paste. Get the provided URL —
                  or it's shortened version — and paste it wherever you like.
                </li>
                <li>
                  <b>Cons:</b> Needs a really small setup. Like, really small,
                  just follow a few steps.
                </li>
              </ul>
            </Trans>
          </div>
        </div>
      </LinkOrCode>
    </Styled>
  );
};

export default Export;
