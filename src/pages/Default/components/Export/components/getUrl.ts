import ILists from '../../../../../dtos/ILists';

const getUrl = ({ social, header, links }: ILists): string => {
  // I'd love to find a better way to get the current URL and return it.
  // But I just... can't.
  // This way isn't the best because I have to hardcode the available languages.
  // This is suboptimal.
  const split = window.location.href.split(/en|ptbr/g)[0];
  const url = `${split}list`;
  const json = {
    social,
    header,
    links,
  };
  const string = encodeURIComponent(JSON.stringify(json));

  return `${url}?information=${string}`;
};

export default getUrl;
