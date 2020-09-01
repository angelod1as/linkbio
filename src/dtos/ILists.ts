import { Dispatch, SetStateAction } from 'react';

import ISocial from './ISocial';
import IHeader from './IHeader';
import ILinks from './ILinks';
import IColor from './IColor';

export default interface ILists {
  social: {
    list: ISocial;
    hook: Dispatch<SetStateAction<ISocial>>;
  };
  header: {
    list: IHeader;
    hook: Dispatch<SetStateAction<IHeader>>;
  };
  links: {
    list: ILinks[];
    hook: Dispatch<SetStateAction<ILinks[]>>;
  };
  color: {
    list: IColor;
    hook: Dispatch<SetStateAction<IColor>>;
  };
}
