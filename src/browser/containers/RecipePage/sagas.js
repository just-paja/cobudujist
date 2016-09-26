import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import * as constants from '../../constants/actions';

export function* fetchRecipeDetail(action) {
  yield put({ type: constants.RECIPE_DETAIL_LOADING });
  try {
    const res = yield call(api.fetchRecipeDetail, action.recipe);
    const recipe = yield res.json();

    yield put({
      type: constants.RECIPE_DETAIL_RECEIVED,
      recipe,
    });
  } catch (error) {
    yield put({ type: constants.RECIPE_DETAIL_FAILED, error });
  }
}

export function* fetchRecipeDetailOnPageEnter() {
  yield* takeLatest(constants.RECIPE_DETAIL_ENTERED, fetchRecipeDetail);
}

export default [
  fetchRecipeDetailOnPageEnter,
];
