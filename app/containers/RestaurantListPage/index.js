/**
 *
 * RestaurantListPage
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import RestaurantList from 'components/RestaurantList';

import Button from 'components/Button';
import {
  makeSelectRestaurants,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
// import { makeSelectRestaurants } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadRestaurants } from './actions';

const key = 'restaurantList';
export function RestaurantListPage({
  loading,
  error,
  restaurants,
  onClickButton,
  dispatch,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    dispatch(loadRestaurants());
    console.log('loaded');
    console.log(`Loading : ${loading}`);
    console.log(`Error : ${error}`);
    console.log(restaurants);
  }, []);

  const restaurantsListProps = {
    loading,
    error,
    restaurants,
  };

  return (
    <div>
      <FormattedMessage {...messages.header} />
      {/* <div>{`Dump Loading : ${loading}`}</div>
      <div>{`Dump Error : ${error}`}</div> */}
      {/* <div>{`Dump Restaurant : ${JSON.stringify(restaurants, '', 2)}`}</div> */}
      {/* <div>{`Props : ${JSON.stringify(restaurantsListProps)}`}</div> */}
      <Button onClick={onClickButton}>Load</Button>
      <RestaurantList {...restaurantsListProps} />
    </div>
  );
}

RestaurantListPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  restaurants: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.bool,
  ]),
  dispatch: PropTypes.func.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  restaurants: makeSelectRestaurants(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onClickButton: () => dispatch(loadRestaurants()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RestaurantListPage);
