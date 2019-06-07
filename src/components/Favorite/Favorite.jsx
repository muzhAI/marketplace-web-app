import React from 'react';
import T from 'prop-types';
import s from './Favorite.module.scss';

function Favorite({ light }) {
  const icon = light
    ? '/images/icons/blackHeart.svg'
    : '/images/icons/whiteHeart.svg';
  return (
    <div className={s.box}>
      <img src={icon} alt="heart" />
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
