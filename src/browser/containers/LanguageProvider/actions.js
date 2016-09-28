/*
 *
 * LanguageProvider actions
 *
 */

import {
  CHANGE_LOCALE,
} from './constants';

const changeLocale = languageLocale => ({
  type: CHANGE_LOCALE,
  locale: languageLocale,
});

export default { changeLocale };
