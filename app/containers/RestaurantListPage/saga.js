import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_RESTAURANTS } from './constants';
import { loadRestaurantsSuccess, loadRestaurantsError } from './actions';

export function* getRestaurants() {
  const requestURL = `http://localhost:5000/api/restaurant`;

  try {
    const response = yield call(request, requestURL);
    yield put(loadRestaurantsSuccess(response));
  } catch (err) {
    yield put(loadRestaurantsError(err));
  }
}

// Individual exports for testing
export default function* restaurantListSaga() {
  yield takeLatest(LOAD_RESTAURANTS, getRestaurants);
}
