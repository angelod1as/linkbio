import ISocial from '../../../../dtos/ISocial';
import IHeader from '../../../../dtos/IHeader';
import ILinks from '../../../../dtos/ILinks';

const importCode = (
  html: string,
): { social: ISocial; header: IHeader; links: ILinks[] } => {
  const name = html
    .split('<!-- import=name-start -->')[1]
    .split('<!-- import=name-end -->')[0]
    .split('<h1>')[1]
    .split('</h1>')[0];

  const image = html
    .split('<!-- import=image-start -->')[1]
    .split('<!-- import=image-end -->')[0]
    .split('<img src="')[1]
    .split('" alt="" />')[0];

  const instagram = html.includes('<!-- import=instagram-start -->')
    ? html
        .split('<!-- import=instagram-start -->')[1]
        .split('<!-- import=instagram-end -->')[0]
        .split('<a href="')[1]
        .split('" rel')[0]
    : '';

  const twitter = html.includes('<!-- import=twitter-start -->')
    ? html
        .split('<!-- import=twitter-start -->')[1]
        .split('<!-- import=twitter-end -->')[0]
        .split('<a href="')[1]
        .split('" rel')[0]
    : '';

  const facebook = html.includes('<!-- import=facebook-start -->')
    ? html
        .split('<!-- import=facebook-start -->')[1]
        .split('<!-- import=facebook-end -->')[0]
        .split('<a href="')[1]
        .split('" rel')[0]
    : '';

  const linkedin = html.includes('<!-- import=linkedin-start -->')
    ? html
        .split('<!-- import=linkedin-start -->')[1]
        .split('<!-- import=linkedin-end -->')[0]
        .split('<a href="')[1]
        .split('" rel')[0]
    : '';

  const whatsapp = html.includes('<!-- import=whatsapp-start -->')
    ? html
        .split('<!-- import=whatsapp-start -->')[1]
        .split('<!-- import=whatsapp-end -->')[0]
        .split('<a href="')[1]
        .split('" rel')[0]
        .split('wa.me/')[1]
    : '';

  const links = html
    .split('<!-- import=linklist-start -->')[1]
    .split('<!-- import=linklist-end -->')[0]
    .split('<!-- import=link-start -->')
    .filter((each) => each !== '')
    .map((each) => {
      return {
        url: each.split('<a href="')[1].split('" rel=')[0],
        title: each.split('target="_blank">')[1].split('</a>')[0],
      };
    });

  return {
    header: {
      name,
      image,
    },
    social: {
      instagram,
      facebook,
      linkedin,
      twitter,
      whatsapp,
    },
    links,
  };
};

export default importCode;
