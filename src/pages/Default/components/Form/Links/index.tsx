import React, { useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import ILinks from '../../../../../dtos/ILinks';

import { Form, LinkHolder, LinksContainer, Styled } from './style';

interface IProps {
  list: ILinks[];
  hook: React.Dispatch<React.SetStateAction<ILinks[]>>;
}

const Links = ({ list, hook }: IProps) => {
  const { t } = useTranslation();
  // hoisted
  const links = list;
  const setLinks = hook;

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState('');

  const clean = useCallback(() => {
    setCurrentTitle('');
    setCurrentUrl('');
    setEditing(false);
    setError('');
  }, []);

  const editLinkList = useCallback(() => {
    const newLinks = [...links];

    if (currentIndex !== null) {
      newLinks[currentIndex] = {
        title: currentTitle,
        url: currentUrl,
      };
    }

    setLinks(newLinks);
    clean();
    setCurrentIndex(null);
  }, [clean, currentUrl, currentTitle, currentIndex, links, setLinks]);

  const changeLinkList = useCallback(() => {
    if (currentTitle === '' || currentUrl === '') {
      setError(t('There must be some title and valid URL'));
    } else {
      setLinks([
        {
          title: currentTitle,
          url: currentUrl,
        },
        ...links,
      ]);
      clean();
    }
  }, [clean, currentUrl, currentTitle, links, setLinks, t]);

  const editLink = useCallback((link: ILinks, index: number) => {
    setCurrentTitle(link.title);
    setCurrentUrl(link.url);
    setCurrentIndex(index);
    setEditing(true);
  }, []);

  const removeLink = useCallback(
    (index) => {
      const newLinks = [...links];
      newLinks.splice(index, 1);
      setLinks(newLinks);
    },
    [links, setLinks],
  );

  const moveLink = useCallback(
    (direction, from) => {
      const newLinks = [...links];
      const to = direction === 'up' ? from - 1 : from + 1;

      if (direction === 'up') {
        newLinks.splice(to, 0, newLinks.splice(from, 1)[0]);
      } else {
        newLinks.splice(to, 0, newLinks.splice(from, 1)[0]);
      }

      setLinks(newLinks);
    },
    [links, setLinks],
  );

  const linkList = links.map((each, index) => (
    <LinkHolder key={uuid()}>
      <p>{each.title}</p>
      {index === 0 ? (
        ``
      ) : (
        <button type="button" onClick={() => moveLink('up', index)}>
          ▲
        </button>
      )}
      {index + 1 === links.length ? (
        ''
      ) : (
        <button type="button" onClick={() => moveLink('down', index)}>
          ▼
        </button>
      )}
      <button type="button" onClick={() => editLink(each, index)}>
        {t('Edit')}
      </button>
      <button type="button" onClick={() => removeLink(index)}>
        {t('Delete')}
      </button>
    </LinkHolder>
  ));

  return (
    <Styled>
      <h3>{t('Links')}</h3>

      <Form>
        <label htmlFor="title">
          {t('Title')}
          <input
            type="text"
            name="title"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
          />
        </label>

        <label htmlFor="url">
          {t('URL')}
          <input
            type="text"
            name="url"
            value={currentUrl}
            onChange={(e) => setCurrentUrl(e.target.value)}
          />
        </label>

        <button type="button" onClick={editing ? editLinkList : changeLinkList}>
          {editing ? t('Edit link') : t('Add new link')}
        </button>

        {error ? <p>{error}</p> : ''}
      </Form>

      <LinksContainer>{linkList}</LinksContainer>
    </Styled>
  );
};

export default Links;
