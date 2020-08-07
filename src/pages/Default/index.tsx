import React, { useState } from 'react';

import { Container } from './styles';

import Import from './components/Import';
import Header from './components/Header';
import Form from './components/Form';
import Export from './components/Export';

const Default = () => {
  const [exported, setExported] = useState(false);

  return (
    <Container>
      <Header />

      <Import setExported={setExported} />

      <Form />

      {/* Sidebar showing how it's going to look */}
      <Export exported={exported} setExported={setExported} />
    </Container>
  );
};

export default Default;
