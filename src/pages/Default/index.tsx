import React, { useState } from 'react';

import { Container } from './styles';

import IHeader from '../../dtos/IHeader';
import ISocial from '../../dtos/ISocial';
import ILinks from '../../dtos/ILinks';
import ILists from '../../dtos/ILists';

import Import from './components/Import';
import Header from './components/Header';
import Form from './components/Form';
import Export from './components/Export';

const Default = () => {
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
      <Header />

      <Import setExported={setExported} />

      <Form social={lists.social} header={lists.header} links={lists.links} />

      {/* Sidebar showing how it's going to look */}
      <Export exported={exported} setExported={setExported} />
    </Container>
  );
};

export default Default;
