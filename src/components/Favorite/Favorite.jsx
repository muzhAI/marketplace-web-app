import React from 'react';
import T from 'prop-types';
import s from './Favorite.module.scss';
import { HeartIcon } from '../../atoms';

function Favorite({ light }) {
  const iconColor = light ? '#33333A' : '#fff';
  return (
    <div className={s.box}>
      <HeartIcon size={17} color={iconColor} />
    </div>
  );
}

Favorite.propTypes = {
  light: T.bool,
};

Favorite.defaultProps = {
  light: false,
};

export default Favorite;
