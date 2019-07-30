import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_RESTAURANTS } from './constants';
import { loadRestaurantsSuccess, loadRestaurantsError } from './actions';

export function* getRestaurants(action) {
  const requestURL = `http://localhost:5000/api/restaurant`;
  // const requestURL = `https://reqres.in/api/users`;
  console.log(`Saga! try to get request from ${requestURL}`);

  try {
    const response = yield call(request, requestURL);
    console.log(`Fetch success: `);
    console.log(response);
    yield put(loadRestaurantsSuccess(response));
  } catch (err) {
    console.log(`Error!! ${err}`);
    yield put(loadRestaurantsError(err));
  }
}

// Individual exports for testing
export default function* restaurantListSaga() {
  yield takeLatest(LOAD_RESTAURANTS, getRestaurants);
}
