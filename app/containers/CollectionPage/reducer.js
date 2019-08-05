/*
 *
 * CollectionPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_COLLECTIONS,
  LOAD_COLLECTIONS_SUCCESS,
  LOAD_COLLECTIONS_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  collections: false,
};

/* eslint-disable default-case, no-param-reassign */
const collectionPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_COLLECTIONS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_COLLECTIONS_SUCCESS:
        draft.collections = action.collections.data;
        draft.loading = false;
        break;

      case LOAD_COLLECTIONS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default collectionPageReducer;
