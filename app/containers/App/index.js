/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import RestaurantListPage from 'containers/RestaurantListPage/Loadable';
import CollectionPage from 'containers/CollectionPage/Loadable';
import Header from 'components/Header';
// import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1280px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Simple Resturant App"
        defaultTitle="Simple Restaurant App"
      >
        <meta name="description" content="A Simple Restaurant application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={RestaurantListPage} />
        <Route exact path="/collections" component={CollectionPage} />
        <Route path="" component={NotFoundPage} />
        {/* <Route exact path="/homepage" component={HomePage} /> */}
        {/* <Route path="/features" component={FeaturePage} /> */}
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
