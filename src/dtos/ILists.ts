import { Dispatch, SetStateAction } from 'react';

import ISocial from './ISocial';
import IHeader from './IHeader';
import ILinks from './ILinks';

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
}
