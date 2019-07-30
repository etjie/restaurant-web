/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  restaurants: {
    id: `${scope}.restaurants`,
    defaultMessage: 'Restaurants',
  },
  collections: {
    id: `${scope}.collections`,
    defaultMessage: 'Collections',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Simple Restaurant App',
  },
});
