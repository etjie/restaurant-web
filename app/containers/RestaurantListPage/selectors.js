import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the restaurantListPage state domain
 */

const selectRestaurantsDomain = state => state.restaurantList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RestaurantListPage
 */

const makeSelectRestaurants = () =>
  createSelector(
    selectRestaurantsDomain,
    substate => substate.restaurants,
  );

const makeSelectLoading = () =>
  createSelector(
    selectRestaurantsDomain,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectRestaurantsDomain,
    substate => substate.error,
  );

const makeSelectCheckedRestaurants = () =>
  createSelector(
    selectRestaurantsDomain,
    substate => substate.checkedRestaurants,
  );

export {
  makeSelectRestaurants,
  makeSelectLoading,
  makeSelectError,
  makeSelectCheckedRestaurants,
};
