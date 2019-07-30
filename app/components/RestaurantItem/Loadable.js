/**
 *
 * Asynchronously loads the component for RestaurantItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
