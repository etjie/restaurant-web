/*
 * RestaurantList Messages
 *
 * This contains all the text for the RestaurantList component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.RestaurantList';

export default defineMessages({
  errorMessage: {
    id: `${scope}.errorMessage`,
    defaultMessage: 'Something went wrong, please try again!',
  },

  restaurantName: {
    id: `${scope}.restaurantName`,
    defaultMessage: 'Restaurant Name',
  },

  openHours: {
    id: `${scope}.openHours`,
    defaultMessage: 'Open Hours',
  },

  action: {
    id: `${scope}.action`,
    defaultMessage: 'Add to Save',
  },
});
