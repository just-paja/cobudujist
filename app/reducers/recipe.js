import update from 'react-addons-update';
import { combineReducers } from 'redux';
import {
  RECIPE_HINT_LOADING,
  RECIPE_HINT_RECEIVED,
  RECIPE_HINT_FAILED,
  RECIPE_DETAIL_LOADING,
  RECIPE_DETAIL_RECEIVED,
  RECIPE_DETAIL_FAILED,
} from '../constants/actions';

const defaultHintState = {
  recipe: null,
  loading: false,
  error: null,
};

const hintReducers = {
  [RECIPE_HINT_LOADING]: state => update(state, {
    loading: { $set: true },
  }),
  [RECIPE_HINT_RECEIVED]: (state, action) => update(state, {
    loading: { $set: false },
    recipe: { $set: action.recipe },
  }),
  [RECIPE_HINT_FAILED]: (state, action) => update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  }),
};

export function hint(state = defaultHintState, action = {}) {
  if (action.type && (typeof hintReducers[action.type] === 'function')) {
    return hintReducers[action.type](state, action);
  }

  return state;
}

const defaultDetailState = {
  recipe: null,
  loading: false,
  error: null,
};

const detailReducers = {
  [RECIPE_DETAIL_LOADING]: state => update(state, {
    loading: { $set: true },
  }),
  [RECIPE_DETAIL_RECEIVED]: (state, action) => update(state, {
    loading: { $set: false },
    recipe: { $set: action.recipe },
  }),
  [RECIPE_DETAIL_FAILED]: (state, action) => update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  }),
};

export function detail(state = defaultDetailState, action = {}) {
  if (action.type && (typeof detailReducers[action.type] === 'function')) {
    return detailReducers[action.type](state, action);
  }

  return state;
}

export default combineReducers({
  hint,
  detail,
});
