/*
 *
 * RestaurantListPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_RESTAURANTS,
  LOAD_RESTAURANTS_SUCCESS,
  LOAD_RESTAURANTS_ERROR,
  UPDATE_CHECKED,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  restaurants: false,
  checkedRestaurants: [],
};

/* eslint-disable default-case, no-param-reassign */
const restaurantListPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_RESTAURANTS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_RESTAURANTS_SUCCESS:
        draft.restaurants = action.restaurants.data;
        draft.loading = false;
        break;

      case LOAD_RESTAURANTS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case UPDATE_CHECKED:
        draft.checkedRestaurants = action.checked.sort((a, b) => a - b);
        break;
    }
  });

export default restaurantListPageReducer;
