import React from 'react';
import styled from 'styled-components';

import ILists from '../../../../dtos/ILists';

import Header from './Header';
import Social from './Social';
import Links from './Links';

const Styled = styled.div`
  label,
  small,
  input {
    display: block;
    margin: 5px 0;
  }

  label {
    margin: 20px 0;
  }
`;

const HideTest = styled.div`
  display: none;
`;

const Form = ({ social, header, links }: ILists) => {
  return (
    <Styled>
      <HideTest>
        <Header list={header.list} hook={header.hook} />
        <Social list={social.list} hook={social.hook} />
      </HideTest>
      <Links list={links.list} hook={links.hook} />
    </Styled>
  );
};

export default Form;
