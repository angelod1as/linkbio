import React, { useCallback } from 'react';
import styled from 'styled-components';
import ISocial from '../../../../../dtos/ISocial';

const Styled = styled.div``;

interface IProps {
  list: ISocial;
  hook: React.Dispatch<React.SetStateAction<ISocial>>;
}

const Social = ({ list, hook }: IProps) => {
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
      <h3>Social</h3>
      <label htmlFor="instagram">
        Instagram url
        <small>
          example:
          <a href="http://www.instagram.com/cronofobico">
            http://www.instagram.com/cronofobico
          </a>
        </small>
        <input
          type="text"
          name="instagram"
          id="instagram"
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label htmlFor="twitter">
        Twitter url
        <small>
          example:
          <a href="http://www.twitter.com/oicronofobico">
            http://www.twitter.com/oicronofobico
          </a>
        </small>
        <input
          type="text"
          name="twitter"
          id="twitter"
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label htmlFor="facebook">
        Facebook url
        <small>example: http://www.facebook.com/please-god-no</small>
        <input
          type="text"
          name="facebook"
          id="facebook"
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label htmlFor="linkedin">
        LinkedIn url
        <small>
          example:
          <a href="https://www.linkedin.com/in/angelod1as/">
            https://www.linkedin.com/in/angelod1as/
          </a>
        </small>
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          onChange={(e) => handleChange(e)}
        />
      </label>
    </Styled>
  );
};

export default Social;
