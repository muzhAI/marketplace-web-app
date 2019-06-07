import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Privacy from './Privacy/Privacy';
import Terms from './Terms/Terms';
import Inbox from './Inbox/Inbox';
import Bookmarks from './Bookmarks/Bookmarks';
import Profile from './Profile/ProfileContainer';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddProduct from './AddProduct/AddProduct';
import AddProductModal from './AddProductModal/AddProductModal';

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
  product: '/products/:id',
  addProduct: '/products/add',
};

class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    return (
      <>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route
            exact
            path="/(users/.+|products/.+|search)?"
            component={Home}
          />
          <Route path={routes.auth} component={Auth} />
          <Route path={routes.privacy} component={Privacy} />
          <Route path={routes.terms} component={Terms} />
          <PrivateRoute path={routes.profile} component={Profile} />
          <PrivateRoute path={routes.bookmarks} component={Bookmarks} />
          <PrivateRoute path={routes.inbox} component={Inbox} />
          <PrivateRoute path={routes.addProduct} component={AddProduct} />
          <Route component={NotFound} />
        </Switch>
        {isModal ? (
          <PrivateRoute
            path={routes.AddProductModal}
            component={AddProductModal}
          />
        ) : null}
      </>
    );
  }
}

function Router() {
  return (
    <BrowserRouter>
      <Route component={ModalSwitch} />
    </BrowserRouter>
  );
}

export default Router;
