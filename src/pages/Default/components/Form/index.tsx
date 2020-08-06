import React from 'react';
import styled from 'styled-components';

// import Header from './Header';
// import Social from './Social';
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

const Form: React.FC = () => {
  return (
    <Styled>
      {/* <Header /> */}
      {/* <Social /> */}
      <Links />
    </Styled>
  );
};

export default Form;
