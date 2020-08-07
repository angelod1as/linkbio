import React, { useCallback } from 'react';
import styled from 'styled-components';
import IHeader from '../../../../../dtos/IHeader';

const Styled = styled.div``;

interface IProps {
  list: IHeader;
  hook: React.Dispatch<React.SetStateAction<IHeader>>;
}

const Header = ({ list, hook }: IProps) => {
  const information = list;
  const setInformation = hook;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newInformation = { ...information };
      const { id, value } = e.target;

      newInformation[id] = value;

      setInformation(newInformation);
    },
    [setInformation, information],
  );

  return (
    <Styled>
      <h2>Create your link list</h2>

      <h3>Header</h3>
      <label htmlFor="name">
        Page name
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label htmlFor="image">
        Photo
        <small>
          You can upload a picture using <a href="www.imgur.com">imgur</a>. Post
          the final url here
        </small>
        <input
          type="url"
          name="image"
          id="image"
          onChange={(e) => handleChange(e)}
        />
      </label>
    </Styled>
  );
};

export default Header;
