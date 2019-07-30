/**
 *
 * RestaurantList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function RestaurantList({ loading, error, restaurants }) {
  console.log(`loading Restaurant List :  ${restaurants}`);
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (restaurants !== false) {
    restaurants.map(item => (
      <ListItem key={`restaurant-${item.name}`} item={item.name} />
    ));
  }

  return null;
}

RestaurantList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  restaurants: PropTypes.any,
};

export default RestaurantList;
