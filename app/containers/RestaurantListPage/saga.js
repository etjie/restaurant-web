import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_RESTAURANTS, SAVE_RESTAURANTS } from './constants';
import {
  loadRestaurantsSuccess,
  loadRestaurantsError,
  saveRestaurantsSuccess,
  saveRestaurantsError,
} from './actions';

export function* getRestaurants() {
  const requestURL = `http://localhost:5000/api/restaurant`;

  try {
    const response = yield call(request, requestURL);
    yield put(loadRestaurantsSuccess(response));
  } catch (err) {
    yield put(loadRestaurantsError(err));
  }
}

export function* saveRestaurantsCollection(action) {
  const requestURL = `http://localhost:5000/api/collection`;

  try {
    const { payload } = action;
    const option = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    const response = yield call(request, requestURL, option);
    yield put(saveRestaurantsSuccess(response));
  } catch (err) {
    yield put(saveRestaurantsError(err));
  }
}

// Individual exports for testing
export default function* restaurantListSaga() {
  yield takeLatest(LOAD_RESTAURANTS, getRestaurants);
  yield takeLatest(SAVE_RESTAURANTS, saveRestaurantsCollection);
}
