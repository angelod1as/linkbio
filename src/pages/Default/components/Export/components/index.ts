import ILists from '../../../../../dtos/ILists';
import getUrl from './getUrl';
import getCode from './getCode';

const templates = (type: string, { social, header, links }: ILists): string => {
  if (type === 'url') {
    return getUrl({ social, header, links });
  }

  if (type === 'code') {
    return getCode({ social, header, links });
  }

  // Making this easier to implement other modes
  return 'Template not found, contact developer.';
};

export default templates;
