/*
 *
 * RestaurantListPage actions
 *
 */

import {
  LOAD_RESTAURANTS,
  LOAD_RESTAURANTS_SUCCESS,
  LOAD_RESTAURANTS_ERROR,
  SAVE_RESTAURANTS,
  SAVE_RESTAURANTS_SUCCESS,
  SAVE_RESTAURANTS_ERROR,
  UPDATE_CHECKED,
  TOGGLE_FORM,
} from './constants';

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
});

export const loadRestaurantsSuccess = restaurants => ({
  type: LOAD_RESTAURANTS_SUCCESS,
  restaurants,
});

export const loadRestaurantsError = error => ({
  type: LOAD_RESTAURANTS_ERROR,
  error,
});

export const saveRestaurants = payload => ({
  type: SAVE_RESTAURANTS,
  payload,
});

export const saveRestaurantsSuccess = () => ({
  type: SAVE_RESTAURANTS_SUCCESS,
});

export const saveRestaurantsError = () => ({
  type: SAVE_RESTAURANTS_ERROR,
});

export const updateChecked = checked => ({
  type: UPDATE_CHECKED,
  checked,
});

export const toggleForm = () => ({
  type: TOGGLE_FORM,
});
