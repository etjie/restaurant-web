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
  UPDATE_CHECKED,
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

export const saveRestaurants = () => ({
  type: SAVE_RESTAURANTS,
});

export const updateChecked = checked => ({
  type: UPDATE_CHECKED,
  checked,
});
