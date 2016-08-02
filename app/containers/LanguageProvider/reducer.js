/*
 * LanguageProvider reducer
 */

import update from 'react-addons-update';
import { CHANGE_LOCALE } from './constants';

const initialState = {
  locale: 'cs',
};

function languageProviderReducer(state = initialState, action) {
  if (action.type === CHANGE_LOCALE) {
    return update(state, {
      locale: { $set: action.locale },
    });
  }

  return state;
}

export default languageProviderReducer;
