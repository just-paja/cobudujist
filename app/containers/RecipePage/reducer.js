import { combineReducers } from 'redux';

const defaultState = {
  recipe: null,
  loading: false,
};

const recipeHintReducers = {
};

export function recipeHint(state = defaultState, action = {}) {
  if (action.type && (typeof recipeHintReducers[action.type] === 'function')) {
    return recipeHintReducers[action.type](state, action);
  }

  return state;
}

export default combineReducers({
  recipeHint,
});
