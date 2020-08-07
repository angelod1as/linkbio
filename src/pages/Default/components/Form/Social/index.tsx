import React from 'react';
import styled from 'styled-components';

const Styled = styled.div``;

const Social = () => {
  return (
    <Styled>
      <h3>Social</h3>
      <label htmlFor="instagram">
        Instagram url
        <small>
          example:
          <a href="http://www.instagram.com/cronofobico">
            http://www.instagram.com/cronofobico
          </a>
        </small>
        <input type="text" name="instagram" id="instagram" />
      </label>

      <label htmlFor="twitter">
        Twitter url
        <small>
          example:
          <a href="http://www.twitter.com/oicronofobico">
            http://www.twitter.com/oicronofobico
          </a>
        </small>
        <input type="text" name="twitter" id="twitter" />
      </label>

      <label htmlFor="facebook">
        Facebook url
        <small>example: http://www.facebook.com/please-god-no</small>
        <input type="text" name="facebook" id="facebook" />
      </label>

      <label htmlFor="linkedin">
        LinkedIn url
        <small>
          example:
          <a href="https://www.linkedin.com/in/angelod1as/">
            https://www.linkedin.com/in/angelod1as/
          </a>
        </small>
        <input type="text" name="linkedin" id="linkedin" />
      </label>
    </Styled>
  );
};

export default Social;
