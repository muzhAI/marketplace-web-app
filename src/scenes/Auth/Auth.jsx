import React from 'react';
// import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { routes } from '../router';
import Api from '../../api';
import Login from '../Login/Login';
import Register from '../Register/Register';

function Auth() {
  return (
    <>
      <Header light />
      <div className="main">
        <Switch>
          {Api.Auth.isLogedIn && <Redirect to={routes.home} />}
          <Route path={routes.login} component={Login} exact />
          <Route path={routes.register} component={Register} exact />
          <Redirect from={routes.auth} to={routes.login} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

Auth.propTypes = {};

export default Auth;
