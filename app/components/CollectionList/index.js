/**
 *
 * CollectionList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CollectionList() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CollectionList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  collections: PropTypes.any,
};

export default CollectionList;
