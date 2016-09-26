import { fork } from 'redux-saga/effects';

import homePage from '../containers/HomePage/sagas';
import recipePage from '../containers/RecipePage/sagas';

const sagas = [
  ...homePage,
  ...recipePage,
];

export default function* () {
  yield sagas.map(saga => fork(saga));
}
