import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Container, EditPanel, PreviewPanel } from './styles';

import IHeader from '../../dtos/IHeader';
import ISocial from '../../dtos/ISocial';
import ILinks from '../../dtos/ILinks';
import ILists from '../../dtos/ILists';

import Import from './components/Import';
import Header from './components/Header';
import Form from './components/Form';
import Export from './components/Export';

interface IParams {
  match: {
    params: {
      lang: string;
    };
  };
}

const Default = ({
  match: {
    params: { lang },
  },
}: IParams) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  const [exported, setExported] = useState(false);
  const [socialList, setSocialList] = useState<ISocial>({
    instagram: '',
    facebook: '',
    linkedin: '',
    twitter: '',
  });
  const [headerList, setHeaderList] = useState<IHeader>({
    name: '',
    image: '',
    color: '',
  });
  const [linkList, setLinkList] = useState<ILinks[]>([
    {
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia obcaecati veritatis repudiandae ad delectus a eius error, id repellendus odio nulla sequi nihil. Explicabo enim modi dolorum mollitia cupiditate error.',
      url: 'URL1',
    },
    {
      title: 'Title2',
      url: 'URL2',
    },
    {
      title: 'Title3',
      url: 'URL3',
    },
  ]);

  const lists: ILists = {
    social: {
      list: socialList,
      hook: setSocialList,
    },
    header: {
      list: headerList,
      hook: setHeaderList,
    },
    links: {
      list: linkList,
      hook: setLinkList,
    },
  };

  return (
    <Container>
      <EditPanel>
        <Header lang={lang} />

        <Import setExported={setExported} />

        <Form social={lists.social} header={lists.header} links={lists.links} />

        {/* Sidebar showing how it's going to look */}
        <Export
          exported={exported}
          setExported={setExported}
          social={lists.social}
          header={lists.header}
          links={lists.links}
        />
      </EditPanel>
      <PreviewPanel />
    </Container>
  );
};

export default Default;
