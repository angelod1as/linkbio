import ILists from '../../../../../dtos/ILists';
import head from './components/head';
import doctype from './components/doctype';
import header from './components/header';
import social from './components/social';
import links from './components/links';
import footer from './components/footer';

const getCode = (props: ILists): string => {
  const headerInfo = props.header.list;
  const socialInfo = props.social.list;
  const linksInfo = props.links.list;

  const html = `
  ${doctype()}
    ${head(headerInfo)}
    <body>
      <!--[if lt IE 8]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
      <![endif]-->
      <div id="root">
        <div>
          <div class="container">
            <div class="main">
              <div class="inside">
                ${header(headerInfo)}
                ${social(socialInfo)}
                ${links(linksInfo)}
              </div>
            </div>
          </div>
          ${footer()}
        </div>
      </div>
    </body>
  </html>
`
    .replace(/ {2}/g, '')
    .replace(/(\r\n)+|\r+|\n+|\t+/g, '');

  return html;
};

export default getCode;
