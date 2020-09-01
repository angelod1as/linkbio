import ILists from '../../../../../dtos/ILists';
import getUrl from './getUrl';
import getCode from './getCode';

const templates = (
  type: string,
  { social, header, links, color }: ILists,
): string => {
  if (type === 'url') {
    return getUrl({ social, header, links, color });
  }

  if (type === 'code') {
    return getCode({ social, header, links, color });
  }

  // Making this easier to implement other modes
  return 'Template not found, contact developer.';
};

export default templates;
