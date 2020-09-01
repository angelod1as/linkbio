import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import IColor from '../../../../../dtos/IColor';
import { Styled, Wrapper, ColorStyle } from './style';

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
      <Wrapper>
        {Object.keys(list).map((each, index) => {
          const last = Object.keys(list).length - 1 === index;
          return (
            <ColorStyle key={each} last={last}>
              <ColorPicker
                color={list[each]}
                onChange={(e: IPicker) =>
                  handleColorChange({ ...e, item: each })
                }
              >
                <span className="rc-color-picker-trigger" />
              </ColorPicker>
            </ColorStyle>
          );
        })}
      </Wrapper>
    </Styled>
  );
};

export default Color;
