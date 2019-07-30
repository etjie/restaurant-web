import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from './H1';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <div>
      <H1>
        <FormattedMessage {...messages.title} />
      </H1>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.restaurants} />
        </HeaderLink>
        <HeaderLink to="/collections">
          <FormattedMessage {...messages.collections} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
