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
  const { item, checkedRestaurants, changeCheckedList } = props;

  function onChangeCheckbox(event) {
    const checked = !!event.target.checked;
    const restaurantId = Number(event.target.value);
    const restaurantArray = checkedRestaurants;
    const arrayIndex = restaurantArray.indexOf(restaurantId);

    if (!checked) {
      restaurantArray.splice(arrayIndex, 1);
    } else {
      restaurantArray.push(restaurantId);
    }
    changeCheckedList(restaurantArray);
  }

  const content = (
    <tr>
      <td>{item.name}</td>
      <td>{item.hours}</td>
      <td>
        <input
          type="checkbox"
          value={item.restaurant_id}
          onChange={onChangeCheckbox}
        />
      </td>
    </tr>
  );

  return content;
}

RestaurantItem.propTypes = {
  item: PropTypes.object,
  checkedRestaurants: PropTypes.array,
  changeCheckedList: PropTypes.func,
};

export default memo(RestaurantItem);
