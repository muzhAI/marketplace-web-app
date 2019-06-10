import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router';
import s from './ChatsLink.module.scss';

function ChatsLink() {
  return (
    <div>
      <Link className={s.link} to={routes.inbox}>
        Inbox
      </Link>
    </div>
  );
}

export default ChatsLink;
