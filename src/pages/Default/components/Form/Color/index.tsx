import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import { v4 as uuid } from 'uuid';
import IColor from '../../../../../dtos/IColor';

import { bp } from '../../../../../styles/global';

const Styled = styled.div`
  margin: 20px 0;
  @media ${bp.medium} {
    margin-top: 30px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-gap: 0 20px;
  grid-template-columns: repeat(2, 1fr);
  @media ${bp.medium} {
    display: block;
    label {
      margin-top: 15px;
    }
  }
`;

interface IProps {
  list: IColor;
  hook: React.Dispatch<React.SetStateAction<IColor>>;
}

interface IPicker {
  alpha: number;
  color: string;
  open: boolean;
}

interface IHandleColorChange {
  color: string;
  item: string;
}

const Color = ({ list, hook }: IProps) => {
  const { t } = useTranslation();
  const colors = list;
  const setColor = hook;

  const handleColorChange = useCallback(
    ({ color, item }: IHandleColorChange) => {
      const newColors = { ...colors };
      newColors[item] = color;
      setColor(newColors);
    },
    [colors, setColor],
  );

  return (
    <Styled>
      <h3>{t('Color')}</h3>
      <Form>
        {Object.keys(list).map((each) => {
          return (
            <label htmlFor={each} key={uuid()}>
              {t(each.replace(/^\w/, (c) => c.toUpperCase()))}
              <ColorPicker
                color={list[each]}
                onChange={(e: IPicker) =>
                  handleColorChange({ ...e, item: each })
                }
              >
                <span className="rc-color-picker-trigger" />
              </ColorPicker>
            </label>
          );
        })}
      </Form>
    </Styled>
  );
};

export default Color;
