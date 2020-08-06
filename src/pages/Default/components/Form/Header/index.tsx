import React from 'react';
import styled from 'styled-components';

const Styled = styled.div``;

const Header: React.FC = () => {
  return (
    <Styled>
      <h2>Create your link list</h2>

      <h3>Header</h3>
      <label htmlFor="name">
        Page name
        <input type="text" name="name" id="name" />
      </label>

      <label htmlFor="photo">
        Photo
        <small>
          You can upload a picture using <a href="www.imgur.com">imgur</a>. Post
          the final url here
        </small>
        <input type="url" name="photo" id="photo" />
      </label>
    </Styled>
  );
};

export default Header;
