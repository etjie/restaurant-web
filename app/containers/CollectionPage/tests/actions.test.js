import { loadCollections } from '../actions';
import { LOAD_COLLECTIONS } from '../constants';

describe('CollectionPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: LOAD_COLLECTIONS,
      };
      expect(loadCollections()).toEqual(expected);
    });
  });
});
