import React from 'react';
import T from 'prop-types';
import s from './ViewerPopover.module.scss';
import { Avatar } from '../../atoms';

function ViewerPopover({ viewer, handleLogout }) {
  const { fullName, email } = viewer;
  return (
    <div className={s.container}>
      <div className={s.topBox}>
        <div className={s.avatarWrap}>
          <Avatar viewer={viewer} />
        </div>
        <div className={s.rightBox}>
          <h5 className={s.name}>{fullName}</h5>
          <p className={s.email}>{email}</p>
          <p className={s.profile}>Profile</p>
        </div>
      </div>
      <button onClick={handleLogout} className={s.btn} type="button">
        Logout
      </button>
    </div>
  );
}

ViewerPopover.propTypes = {
  viewer: T.object.isRequired,
  handleLogout: T.func,
};

ViewerPopover.defaultProps = {
  handleLogout: () => {},
};

export default ViewerPopover;
