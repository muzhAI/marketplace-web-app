import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
        <PrivateRoute path={routes.bookmarks} component={Bookmarks} />
        <PrivateRoute path={routes.inbox} component={Inbox} />
        <Route exact path={routes.user} component={User} />
        <Route exact path={routes.listing} component={Listing} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
