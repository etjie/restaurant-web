import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_COLLECTIONS } from './constants';
import { loadCollectionsSuccess, loadCollectionsError } from './actions';

export function* getCollections() {
  const requestURL = `http://localhost:5000/api/collection`;

  try {
    const response = yield call(request, requestURL);
    yield put(loadCollectionsSuccess(response));
  } catch (err) {
    yield put(loadCollectionsError(err));
  }
}

// Individual exports for testing
export default function* collectionSaga() {
  yield takeLatest(LOAD_COLLECTIONS, getCollections);
}
