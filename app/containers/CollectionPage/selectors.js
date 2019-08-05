import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the collectionPage state domain
 */

const selectCollectionPageDomain = state => state.collection || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CollectionPage
 */

const makeSelectCollections = () =>
  createSelector(
    selectCollectionPageDomain,
    substate => substate,
  );

const makeSelectLoading = () =>
  createSelector(
    selectCollectionPageDomain,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectCollectionPageDomain,
    substate => substate.error,
  );

export { makeSelectCollections, makeSelectLoading, makeSelectError };
