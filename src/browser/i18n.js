import csLocaleData from 'react-intl/locale-data/cs';
import { addLocaleData } from 'react-intl';

import csTranslationMessages from './translations/cs.json';

export const appLocales = ['cs'];

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
