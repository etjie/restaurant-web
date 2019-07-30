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

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Wrapper from './Wrapper';
import Table from './Table';

function RestaurantList({ loading, error, restaurants }) {
  let content = <div />;

  if (loading) {
    content = (
      <Wrapper>
        <LoadingIndicator />
      </Wrapper>
    );
    return content;
  }

  if (error !== false) {
    content = <Wrapper>Something went wrong, please try again!</Wrapper>;
  }

  if (restaurants && restaurants !== false) {
    const list = restaurants.map(item => (
      <RestaurantItem key={item.restaurant_id} item={item} />
    ));

    content = (
      <Table>
        <thead>
          <tr>
            <td>Restaurant Name</td>
            <td>Open Hours</td>
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
};

export default RestaurantList;
