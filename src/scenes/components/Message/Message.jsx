import React from 'react';
import T from 'prop-types';
import cn from 'classnames';
import s from './Message.module.scss';

function Message({ message, sended }) {
  const { text, ownerId, createdAt } = message;
  const messageStyle = sended ? 'sended' : 'received';
  return (
    <div className={s.container}>
      <div className={cn(s.message, s[messageStyle])}>{text}</div>
    </div>
  );
}

Message.propTypes = {
  message: T.object,
  sended: T.bool,
};

Message.defaultProps = {
  sended: true,
};

export default Message;
