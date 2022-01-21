import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchContentSuccess,
  fetchContentFailure
} from './content.actions';

import ContentActionTypes from './content.types';

export function* fetchContentAsync() {
  try {
    console.log('fetching started in saga fetchContentAsync')
    const response = yield axios.get('/data.json').then((response)=>(response.data));
    console.log('response ',response)
    const data = {
      list:[]
    };
    data.list = response.data;
    yield put(fetchContentSuccess(data));
  } catch (error) {
    yield put(fetchContentFailure(error.message));
  }
}

export function* fetchContentStart() {
  console.log('Starting to fetch')
  yield takeLatest(
    ContentActionTypes.FETCH_CONTENT_START,
    fetchContentAsync
  );
  console.log('Finished to fetch')
}

export function* contentSagas() {
  yield all([call(fetchContentStart)]);
}