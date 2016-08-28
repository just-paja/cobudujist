/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import languageProviderReducer from '../containers/LanguageProvider/reducer';
import update from 'react-addons-update';

import device from './device';
import recipe from './recipe';
import server from './server';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = {
  locationBeforeTransitions: null,
};

/**
 * Merge route into the global application state
 */
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


/**
 * Creates the main reducer with the asynchronously loaded ones
 */
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
