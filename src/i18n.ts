import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './assets/translation/en.json';
import ptbr from './assets/translation/ptbr.json';

console.log(en);

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en,
  ptbr,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  keySeparator: false, // we do not use keys in form messages.welcome
});

export default i18n;
