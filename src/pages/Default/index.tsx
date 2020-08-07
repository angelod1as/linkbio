import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

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
  });
  const [linkList, setLinkList] = useState<ILinks[]>([]);

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
    </Container>
  );
};

export default Default;
