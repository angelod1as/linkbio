import React from 'react';
import styled from 'styled-components';

const Styled = styled.div``;
const Title = styled.h2``;
const Explanation = styled.div``;

const Header: React.FC = () => {
  return (
    <Styled>
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
    </Styled>
  );
};

export default Header;
