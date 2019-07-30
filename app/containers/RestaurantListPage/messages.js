/*
 * RestaurantListPage Messages
 *
 * This contains all the text for the RestaurantListPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.RestaurantListPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the RestaurantListPage container!',
  },

  refresh: {
    id: `${scope}.refresh`,
    defaultMessage: 'Refresh',
  },
});
