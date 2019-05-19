import React from 'react';
import T from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { Link, withRouter } from 'react-router-dom';
import s from './Header.module.scss';
import Api from '../../api';
import { routes } from '../../scenes/router';
import { Logo, Button } from '../../atoms';
import Favorite from '../Favorite/Favorite';

// eslint-disable-next-line react/prop-types
function Header({ light, children, location: { pathname }, handleLogout }) {
  const headerColor = light
    ? { background: 'transparent', color: '#2B2B2B' }
    : { color: '#fff' };
  return (
    <header style={headerColor} className={s.header}>
      <div className={s.container}>
        <div className={s.topline}>
          <Logo light={light} path={pathname} />
          <div className={s.wrap}>
            <Button fClass="sell-btn">SELL</Button>
            {Api.Auth.isLoggedIn ? (
              <button
                type="button"
                className={s.authLink}
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link className={s.authLink} to={routes.login}>
                LOGIN
              </Link>
            )}
            <Favorite light={light} />
          </div>
        </div>
        {children}
      </div>
    </header>
  );
}

Header.propTypes = {
  light: T.bool,
  children: T.element,
  handleLogout: T.func,
};

Header.defaultProps = {
  light: false,
  children: null,
  handleLogout: () => {},
};

const enhancer = compose(
  withRouter,
  withHandlers({
    handleLogout: (props) => () => {
      Api.Auth.logout();
      props.history.push(routes.home);
    },
  }),
);

export default enhancer(Header);
