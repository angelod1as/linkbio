import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const Styled = styled.div``;
const Drag = styled.div`
  padding: 10px;
  background-color: red;
  margin: 10px 0;
`;

interface ILinks {
  title: string;
  url: string;
}

const Links = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [editing, setEditing] = useState(false);
  const [links, setLinks] = useState<ILinks[]>([]);

  const editLinkList = useCallback(() => {
    const newLinks = [...links];

    if (currentIndex !== null) {
      newLinks[currentIndex] = {
        title: currentTitle,
        url: currentUrl,
      };
    }

    setLinks(newLinks);
    setCurrentTitle('');
    setCurrentUrl('');
    setCurrentIndex(null);
    setEditing(false);
  }, [currentIndex, currentTitle, currentUrl, links]);

  const changeLinkList = useCallback(() => {
    setLinks([
      {
        title: currentTitle,
        url: currentUrl,
      },
      ...links,
    ]);
    setCurrentTitle('');
    setCurrentUrl('');
  }, [currentTitle, currentUrl, links]);

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
    [links],
  );

  const linkList = links.map((each, i) => (
    <Drag className="link" key={uuid()}>
      <a href={each.url}>{each.title}</a>
      <button type="button" onClick={() => editLink(each, i)}>
        Edit
      </button>
      <button type="button" onClick={() => removeLink(i)}>
        Delete
      </button>
    </Drag>
  ));

  return (
    <Styled>
      <h3>Links</h3>

      <form>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
          />
        </label>

        <label htmlFor="url">
          <input
            type="text"
            name="url"
            value={currentUrl}
            onChange={(e) => setCurrentUrl(e.target.value)}
          />
        </label>

        <button type="button" onClick={editing ? editLinkList : changeLinkList}>
          {editing ? 'Edit link' : 'Add new link'}
        </button>
      </form>

      <div className="links">{linkList}</div>
    </Styled>
  );
};

export default Links;