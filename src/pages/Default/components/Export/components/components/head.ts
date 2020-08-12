import ILists from '../../../../../../dtos/ILists';
import normalize from './normalize';
import styles from './styles';

const head = (header: ILists['header']['list']) => {
  return `
  <head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>${header.name} - Linkbio</title>
  <meta name="description" content="${header.name} list of links" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${header.name} - Linkbio">
  <meta name="twitter:description" content="${header.name} list of links">
  <!-- Twitter Summary card images must be at least 120x120px -->
  <meta name="twitter:image" content="http://www.example.com/image.jpg">

  <!-- Open Graph data -->
  <meta property="og:title" content="${header.name} - Linkbio" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="http://example.com/image.jpg" />
  <meta property="og:description" content="${header.name} list of links" />
  <meta property="og:site_name" content="${header.name} - Linkbio" />

  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap" rel="stylesheet">

  ${normalize()}
  ${styles()}

</head>
  `;
};

export default head;
