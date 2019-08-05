/**
 *
 * CollectionPage
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import CollectionList from 'components/CollectionList';

import {
  makeSelectCollections,
  makeSelectLoading,
  makeSelectError,
} from './selectors';

import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { loadCollections } from './actions';

const key = 'collectionPage';
export function CollectionPage({ loading, error, collections, dispatch }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    dispatch(loadCollections());
  }, []);

  const collectionsListProps = {
    loading,
    error,
    collections,
  };

  return (
    <div>
      <CollectionList {...collectionsListProps} />
    </div>
  );
}

CollectionPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  collections: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.bool,
  ]),
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  restaurants: makeSelectCollections(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
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
)(CollectionPage);
