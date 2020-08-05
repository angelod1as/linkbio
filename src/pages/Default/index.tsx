import React from 'react';

import { Container, Explanation, Export, Form, Import, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Title>Create your link list</Title>
      <Explanation>
        <h2>How to use</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          magnam corporis fugit, repellat odit officiis doloribus voluptatibus
          voluptate, ratione quae molestias mollitia dolorum, iste deserunt ut.
          Suscipit a nobis ut!
        </p>
      </Explanation>

      <Import />
      <Form />
      <Export />
    </Container>
  );
};

export default SignIn;
