/**
 *
 * RestaurantItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function RestaurantItem(props) {
  const { item } = props;
  const content = (
    <tr>
      <td>{item.name}</td>
      <td>{item.hours}</td>
    </tr>
  );

  return content;
}

RestaurantItem.propTypes = {
  items: PropTypes.object,
};

export default memo(RestaurantItem);
