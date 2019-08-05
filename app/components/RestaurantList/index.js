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
import Form from './Form';

function RestaurantList({
  loading,
  error,
  restaurants,
  checkedRestaurants,
  onClickSave,
  onChangeCheckedList,
  isShowForm,
  onToggleForm,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const checkedArray = checkedRestaurants;
    if (name && checkedArray.length > 0) {
      const payload = {
        collection_name: name,
        restaurants: checkedRestaurants,
      };
      onClickSave(payload);
    } else {
      alert(
        'Collection Name cannot be empty and at least 1 restaurant are selected',
      );
    }
    onToggleForm();
  }

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
              <div className={isShowForm ? 'hidden' : ''}>
                <Button onClick={onToggleForm}>
                  <FormattedMessage {...messages.action} />
                </Button>
              </div>
              <div className={isShowForm ? '' : 'hidden'}>
                <Form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Collection Name" />
                  <Button type="submit">Save</Button>
                </Form>
              </div>
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
  isShowForm: PropTypes.bool.isRequired,
  onToggleForm: PropTypes.func.isRequired,
};

export default RestaurantList;
