import React from 'react';
import T from 'prop-types';
import s from './Avatar.module.scss';

function Avatar({ viewer }) {
  const name = viewer.fullName.split(' ');
  return (
    <div className={s.container}>
      <h3 className={s.name}>
        {`${
          name.length >= 2
            ? `${name[0].charAt(0)}${name[1].charAt(0)}`
            : name[0].charAt(0)
        }`}
      </h3>
    </div>
  );
}

Avatar.propTypes = {
  viewer: T.object.isRequired,
};

Avatar.defaultProps = {};

export default Avatar;
