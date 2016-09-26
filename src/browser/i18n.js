/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';

import csLocaleData from 'react-intl/locale-data/cs';

export const appLocales = ['cs'];

import csTranslationMessages from './translations/cs.json';

addLocaleData(csLocaleData);

const formatTranslationMessages = (messages) => {
  const formattedMessages = {};
  for (const message of messages) {
    formattedMessages[message.id] = message.message || message.defaultMessage;
  }

  return formattedMessages;
};

export const translationMessages = {
  cs: formatTranslationMessages(csTranslationMessages),
};
