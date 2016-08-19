import update from 'react-addons-update';
import { combineReducers } from 'redux';
import {
  RECIPE_HINT_LOADING,
  RECIPE_HINT_RECEIVED,
} from '../constants/actions';

const defaultState = {
  recipe: null,
  loading: false,
};

const hintReducers = {
  [RECIPE_HINT_LOADING]: state => update(state, {
    loading: { $set: true },
  }),
  [RECIPE_HINT_RECEIVED]: (state, action) => update(state, {
    loading: { $set: false },
    recipe: { $set: action.recipe },
  }),
};

export function hint(state = defaultState, action = {}) {
  if (action.type && (typeof hintReducers[action.type] === 'function')) {
    return hintReducers[action.type](state, action);
  }

  return state;
}

export default combineReducers({
  hint,
});
