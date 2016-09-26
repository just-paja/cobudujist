import update from 'react-addons-update';
import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

import languageProviderReducer from '../containers/LanguageProvider/reducer';
import device from './device';
import recipe from './recipe';
import server from './server';

const routeInitialState = {
  locationBeforeTransitions: null,
};

const route = (state = routeInitialState, action) => {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return update(state, {
        locationBeforeTransitions: { $set: action.payload },
      });
    default:
      return state;
  }
};

export default function createReducer(asyncReducers) {
  return combineReducers({
    route,
    device,
    recipe,
    server,
    language: languageProviderReducer,
    ...asyncReducers,
  });
}
