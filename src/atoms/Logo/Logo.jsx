import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import T from 'prop-types';
import { routes } from '../../scenes/router';
import s from './Logo.module.scss';

function Logo({ light, path }) {
  let logoSrc;
  if (path === routes.register) {
    logoSrc = '/img/orange-logo.png';
  } else if (light) {
    logoSrc = '/img/green-logo.png';
  } else {
    logoSrc = '/img/white-logo.png';
  }
  return (
    <Link to="/">
      <img className={s.image} src={logoSrc} alt="apico" />
    </Link>
  );
}

Logo.propTypes = {
  path: T.string,
  light: T.bool,
};
Logo.defaultProps = {
  path: '/',
  light: false,
};

const enhancer = (Component) => withRouter(Component);

export default enhancer(Logo);
