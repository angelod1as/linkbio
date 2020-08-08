import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Container, EditPanel, PreviewPanel } from './styles';

import Preview from './components/Preview';

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
    instagram: 'http://www.instagram.com/cronofobico',
    facebook: '',
    linkedin: 'http://www.linkedin.com/in/angelod1as',
    twitter: 'http://www.twitter.com/oicronofobico',
  });
  const [headerList, setHeaderList] = useState<IHeader>({
    name: "Cronofobico's Links",
    image: 'https://i.imgur.com/Ph3aPbR.jpg',
    color: '',
  });
  const [linkList, setLinkList] = useState<ILinks[]>([
    {
      title: 'My portfolio',
      url: 'http://www.angelodias.com.br',
    },
    {
      title: 'Sci Fi Newspaper!',
      url: 'http://www.temposfantasticos.com',
    },
    {
      title: "This project's repository",
      url: 'https://github.com/angelod1as/linkbio',
    },
    {
      title: 'My GitHub',
      url: 'https://github.com/angelod1as/',
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
        <div>
          <Header lang={lang} />

          <Import setExported={setExported} />

          <Form
            social={lists.social}
            header={lists.header}
            links={lists.links}
          />

          {/* Sidebar showing how it's going to look */}
          <Export
            exported={exported}
            setExported={setExported}
            social={lists.social}
            header={lists.header}
            links={lists.links}
          />
        </div>
      </EditPanel>
      <PreviewPanel>
        <Preview
          social={lists.social}
          header={lists.header}
          links={lists.links}
        />
      </PreviewPanel>
    </Container>
  );
};

export default Default;
