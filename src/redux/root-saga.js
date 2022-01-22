import { all, call } from 'redux-saga/effects';

import { contentSagas } from './content/content.sagas';

export default function* rootSaga() {
  yield all([call(contentSagas)]);
}
