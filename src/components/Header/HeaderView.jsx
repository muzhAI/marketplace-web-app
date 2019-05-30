import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './HeaderView.module.scss';
import { routes } from '../../scenes/router';
import { Logo, Button, Avatar } from '../../atoms';
import Favorite from '../Favorite/Favorite';
import ViewerPopover from '../ViewerPopover/ViewerPopover';

function HeaderView({
  viewer,
  light,
  children,
  location: { pathname },
  handleLogout,
  handlePopoverToggle,
  isPopoverVisible,
}) {
  const headerColor = light
    ? { background: 'transparent', color: '#2B2B2B' }
    : { color: '#fff' };
  return (
    <header style={headerColor} className={s.header}>
      <div className={s.container}>
        <div className={s.topLine}>
          <Logo light={light} path={pathname} />
          <div className={s.wrap}>
            <Button outerClass="sell-btn">SELL</Button>
            {viewer ? (
              <div onClick={handlePopoverToggle}>
                <Avatar viewer={viewer} />
                {isPopoverVisible && (
                  <ViewerPopover viewer={viewer} handleLogout={handleLogout} />
                )}
              </div>
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

HeaderView.propTypes = {
  light: T.bool,
  children: T.element,
  handleLogout: T.func,
  viewer: T.object,
  handlePopoverToggle: T.func,
  isPopoverVisible: T.bool,
};

HeaderView.defaultProps = {
  light: false,
  children: null,
  handlePopoverToggle: () => {},
  handleLogout: () => {},
  isPopoverVisible: false,
  viewer: null,
};

export default HeaderView;
