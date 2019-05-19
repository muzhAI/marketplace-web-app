import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Privacy from './Privacy/Privacy';
import Terms from './Terms/Terms';
import Inbox from './Inbox/Inbox';
import Search from './Search/Search';
import Bookmarks from './Bookmarks/Bookmarks';
import Profile from './Profile/Profile';
import User from './User/User';
import Listing from './Listing/Listing';
import Api from '../api';

export const routes = {
  home: '/',
  auth: '/auth',
  login: '/auth/login',
  register: '/auth/register',
  terms: '/terms',
  privacy: '/privacy',
  inbox: '/inbox',
  bookmarks: '/bookmarks',
  profile: '/profile',
  search: '/search',
  user: '/users/:id',
  listing: '/listings/:id',
};

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.auth} component={Auth} />
        <Route path={routes.privacy} component={Privacy} />
        <Route path={routes.terms} component={Terms} />
        <Route path={routes.search} component={Search} />
        <Route path={routes.profile} component={Profile} />
        <Route path={routes.bookmarks} component={Bookmarks} />
        <Route exact path={routes.user} component={User} />
        <Route exact path={routes.listing} component={Listing} />
        <PrivateRoute path={routes.inbox} component={Inbox} />
        <Route path={routes.inbox} component={Inbox} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        Api.Auth.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.login} />
        )
      }
    />
  );
}

export default Router;
