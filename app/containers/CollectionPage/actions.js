/*
 *
 * CollectionPage actions
 *
 */

import {
  LOAD_COLLECTIONS,
  LOAD_COLLECTIONS_SUCCESS,
  LOAD_COLLECTIONS_ERROR,
} from './constants';

export const loadCollections = () => ({
  type: LOAD_COLLECTIONS,
});

export const loadCollectionsSuccess = collections => ({
  type: LOAD_COLLECTIONS_SUCCESS,
  collections,
});

export const loadCollectionsError = error => ({
  type: LOAD_COLLECTIONS_ERROR,
  error,
});
