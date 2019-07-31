/**
 *
 * RestaurantList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import RestaurantItem from 'components/RestaurantItem';
import LoadingIndicator from 'components/LoadingIndicator';

import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import messages from './messages';
import Wrapper from './Wrapper';
import Table from './Table';

function RestaurantList({
  loading,
  error,
  restaurants,
  checkedRestaurants,
  onClickSave,
  onChangeCheckedList,
}) {
  let content = <div />;

  if (loading) {
    content = (
      <Wrapper>
        <LoadingIndicator />
      </Wrapper>
    );
  }

  if (error !== false) {
    content = (
      <Wrapper>
        <FormattedMessage {...messages.errorMessage} />
      </Wrapper>
    );
  }

  if (restaurants && restaurants !== false) {
    const list = restaurants.map(item => (
      <RestaurantItem
        key={item.restaurant_id}
        item={item}
        checkedRestaurants={checkedRestaurants}
        changeCheckedList={onChangeCheckedList}
      />
    ));

    content = (
      <Table>
        <thead>
          <tr>
            <td>
              <FormattedMessage {...messages.restaurantName} />
            </td>
            <td>
              <FormattedMessage {...messages.openHours} />
            </td>
            <td>
              <Button onClick={onClickSave}>
                <FormattedMessage {...messages.action} />
              </Button>
            </td>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </Table>
    );
  }

  return content;
}

RestaurantList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  restaurants: PropTypes.any,
  checkedRestaurants: PropTypes.array,
  onClickSave: PropTypes.func.isRequired,
  onChangeCheckedList: PropTypes.func,
};

export default RestaurantList;
