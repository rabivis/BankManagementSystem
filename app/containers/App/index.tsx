/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styles/styled-components';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Container } from 'reactstrap';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  display: block;
`;

function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Bank Management System"
        defaultTitle="Bank Management System"
      >
        <meta name="description" content="Bank Management System" />
      </Helmet>
      <Header />
      <Container>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
export default hot(App);
