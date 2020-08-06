import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const Styled = styled.div``;

interface ILinks {
  title: string;
  url: string;
}

interface IChange {
  title?: string;
  url?: string;
  index: string;
}

const Links: React.FC = () => {
  const [links, setLinks] = useState<ILinks[]>([]);

  const addLink = useCallback(() => {
    const newLinks = [...links];
    newLinks.push({ title: '', url: '' });
    setLinks(newLinks);
  }, [links]);

  const changeLink = useCallback(
    ({ index, title, url }: IChange) => {
      const position = +index.split('link-')[0];

      const link = links[position];

      if (title) {
        link.title = title;
      }

      if (url) {
        link.url = url;
      }

      const newLinks = [...links];
      newLinks[position] = link;

      setLinks(newLinks);
      console.log(links);
    },
    [links],
  );

  return (
    <Styled>
      <h3>Links</h3>

      <button type="button" onClick={addLink}>
        Add new link
      </button>

      <div className="links">
        {links.map((each, i) => {
          const index = `link-${i}`;
          return (
            <div className="link" key={uuid()} id={index}>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  name="title"
                  value={each.title}
                  onChange={(e) =>
                    changeLink({
                      index,
                      title: e.target.value,
                    })
                  }
                />
              </label>
              <label htmlFor="url">
                Url
                <input
                  type="text"
                  name="url"
                  value={each.url}
                  onChange={(e) =>
                    changeLink({
                      index,
                      url: e.target.value,
                    })
                  }
                />
              </label>
            </div>
          );
        })}
      </div>
    </Styled>
  );
};

export default Links;
