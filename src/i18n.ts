import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      'Create your link list': 'Create your link list',
      'How to use': 'How to use',
      'How to use explanation': 'How to use explanation',
      'Import title': 'Import code or url',
      'Import explanation 1':
        'If you already created a list, you can import and edit it using the fields below.',
      'Import explanation 2':
        'Copy and paste the final url or the generated self-hosted code',
      'Import link': 'Import link',
      'Import code': 'Import code',
      Import: 'Import',
      'Form header title': 'Create list',
      Header: 'Header',
      'Page name': 'Page name',
      Photo: 'Photo',
      'photo imgur': 'You can use <1>imgur</1>',
      Social: 'Social',
      'Instagram url': 'Instagram url',
      example: 'example',
      'Twitter url': 'Twitter url',
      'Facebook url': 'Facebook url',
      'LinkedIn url': 'LinkedIn url',
      'There must be some title and valid URL':
        'There must be some title and valid URL',
      Edit: 'Edit',
      Delete: 'Delete',
      Links: 'Links',
      Title: 'Title',
      URL: 'URL',
      'Edit link': 'Edit link',
      'Add new link': 'Add new link',
      'Export title': 'Export code or url',
      'Export explanation 1':
        'You can export a long URL or a ready-made HTML code for self-hosting.',
      'Export explanation 2':
        "The best choice is self-hosting. It's easy to set up, just follow the tutorial.",
      'Export long URL': 'Export long URL',
      'Export code for self-hosting': 'Export code for self-hosting',
      Export: 'Export',
      'Full urls': "Please insert full URLs, with 'http' and all",
    },
  },
  ptbr: {
    translation: {
      'Create your link list': 'Crie sua lista de links',
      'How to use': 'Como usar',
      'How to use explanation': 'Explicação de como usar',
      'photo imgur': 'Você pode usar o <1>imgur</1>',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  keySeparator: false, // we do not use keys in form messages.welcome
});

export default i18n;
