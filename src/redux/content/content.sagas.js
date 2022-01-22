import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchContentSuccess,
  fetchContentFailure
} from './content.actions';

import ContentActionTypes from './content.types';

export function* fetchContentAsync() {
  try {
    const response = yield axios.get('https://jsonplaceholder.typicode.com/posts');
    yield put(fetchContentSuccess(response.data));
  } catch (error) {
    yield put(fetchContentFailure(error.message));
  }
}

export function* fetchContentStart() {
  yield takeLatest(
    ContentActionTypes.FETCH_CONTENT_START,
    fetchContentAsync
  );
}

export function* contentSagas() {
  yield all([call(fetchContentStart)]);
}
