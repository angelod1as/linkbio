import ILists from '../../../../../dtos/ILists';

const templates = (type: string, { social, header, links }: ILists) => {
  if (type === 'url') {
    const split = window.location.href.split('/');
    const url = `${split[0]}//${split[2]}/list`;
    const json = {
      social,
      header,
      links,
    };
    const string = encodeURIComponent(JSON.stringify(json));

    return `${url}?information=${string}`;
  }
  return 'Not yet implemented :(';
};

export default templates;
