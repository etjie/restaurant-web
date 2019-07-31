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
  makeSelectCheckedRestaurants,
} from './selectors';
// import { makeSelectRestaurants } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadRestaurants, saveRestaurants, updateChecked } from './actions';

const key = 'restaurantList';
export function RestaurantListPage({
  loading,
  error,
  restaurants,
  checkedRestaurants,
  onClickButton,
  onClickSave,
  dispatch,
  onChangeCheckedList,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  const restaurantsListProps = {
    loading,
    error,
    restaurants,
    checkedRestaurants,
    onClickSave,
    onChangeCheckedList,
  };

  return (
    <div>
      {/* <FormattedMessage {...messages.header} /> */}
      <RestaurantList {...restaurantsListProps} />
      <Button onClick={onClickButton}>
        <FormattedMessage {...messages.refresh} />
      </Button>
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
  checkedRestaurants: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  onClickButton: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onChangeCheckedList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  restaurants: makeSelectRestaurants(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  checkedRestaurants: makeSelectCheckedRestaurants(),
});

function mapDispatchToProps(dispatch) {
  return {
    onClickButton: () => dispatch(loadRestaurants()),
    onClickSave: () => dispatch(saveRestaurants()),
    onChangeCheckedList: data => dispatch(updateChecked(data)),
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
