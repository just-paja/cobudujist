import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import * as constants from '../../constants/actions';

export function* fetchRandomRecipe() {
  yield put({ type: constants.RECIPE_HINT_LOADING });
  try {
    const res = yield call(api.fetchRandomRecipe);
    const recipe = yield res.json();

    yield put({
      type: constants.RECIPE_HINT_RECEIVED,
      recipe,
    });
  } catch (e) {
    yield put({ type: constants.RECIPE_HINT_FAILED });
  }
}

export function* fetchRandomRecipeOnPageLoad() {
  yield* takeLatest(constants.HOME_PAGE_RENDERED, fetchRandomRecipe);
}

export default [
  fetchRandomRecipeOnPageLoad,
];
