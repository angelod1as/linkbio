import React from 'react';

import { Container, Export } from './styles';

import Import from './components/Import';
import Header from './components/Header';
import Form from './components/Form';

const Default: React.FC = () => {
  return (
    <Container>
      {/* <Header /> */}

      {/* <Import /> */}

      <Form />

      {/* Sidebar showing how it's going to look */}
      <Export />
    </Container>
  );
};

export default Default;
