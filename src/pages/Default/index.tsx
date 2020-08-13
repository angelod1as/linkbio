import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Container, EditPanel, PreviewPanel, TutorialPanel } from './styles';

import IHeader from '../../dtos/IHeader';
import ISocial from '../../dtos/ISocial';
import ILinks from '../../dtos/ILinks';
import ILists from '../../dtos/ILists';

import importString from './components/Import/importString';

import Preview from './components/Preview';
import Footer from './components/Footer';
import Import from './components/Import';
import Header from './components/Header';
import Form from './components/Form';
import Export from './components/Export';
import Tutorial from './components/Tutorial';

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
  const history = useHistory();
  const { i18n } = useTranslation();

  const [isDisplay, setIsDisplay] = useState(true);
  const [isTutorial, setIsTutorial] = useState(false);

  const [socialList, setSocialList] = useState<ISocial>({
    instagram: 'http://www.instagram.com/cronofobico',
    facebook: '',
    linkedin: 'http://www.linkedin.com/in/angelod1as',
    twitter: 'http://www.twitter.com/oicronofobico',
  });

  const [headerList, setHeaderList] = useState<IHeader>({
    name: "Cronofobico's Links",
    image: 'https://i.imgur.com/Ph3aPbR.jpg',
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

  useEffect(() => {
    // set language
    // This is a gambiarra explained in export/templates file.
    if (
      lang !== 'en' &&
      lang !== 'ptbr' &&
      lang !== 'list' &&
      lang !== 'edit'
    ) {
      history.push('/en');
    }

    i18n.changeLanguage(lang);

    if (lang === 'list') {
      setIsDisplay(true);
      const { search } = history.location;
      const information = search.split('?information=')[1];
      const { social, header, links } = importString(information);
      setSocialList(social.list);
      setHeaderList(header.list);
      setLinkList(links.list);
    } else if (lang === 'edit') {
      setIsDisplay(false);
      const { search } = history.location;
      const information = search.split('?information=')[1];
      const { social, header, links } = importString(information);
      history.push('/en');
      setSocialList(social.list);
      setHeaderList(header.list);
      setLinkList(links.list);
    } else {
      setIsDisplay(false);
    }
  }, [i18n, lang, setIsDisplay, history]);

  return (
    <Container isDisplay={isDisplay}>
      {isDisplay ? (
        ''
      ) : (
        <EditPanel>
          <div>
            <Header lang={lang} />

            <Import
              setSocialList={setSocialList}
              setHeaderList={setHeaderList}
              setLinkList={setLinkList}
            />

            <Form
              social={lists.social}
              header={lists.header}
              links={lists.links}
            />

            <Export
              social={lists.social}
              header={lists.header}
              links={lists.links}
              setIsTutorial={setIsTutorial}
              isTutorial={isTutorial}
            />
          </div>
        </EditPanel>
      )}
      {isTutorial ? (
        <TutorialPanel>
          <Tutorial setIsTutorial={setIsTutorial} />
        </TutorialPanel>
      ) : (
        <PreviewPanel>
          <Preview
            social={lists.social}
            header={lists.header}
            links={lists.links}
          />
        </PreviewPanel>
      )}
      <Footer />
    </Container>
  );
};

export default Default;
