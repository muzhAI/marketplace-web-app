import React from 'react';
import T from 'prop-types';
import s from './Chat.module.scss';
import { Avatar } from '../../atoms';
import { Message } from '../components';

function Chat({ messages, sendMessage, text, handleChange, chat, isLoading }) {
  const participant = chat.participants[0];
  const messageList = messages.map((message) => {
    const sended = message.ownerId !== participant.id;
    return <Message key={message.id} message={message} sended={sended} />;
  });
  return (
    <>
      <div className={s.header}>
        <div className={s.avatarWrap}>
          <Avatar profile={participant} />
        </div>
        <h5 className={s.participantName}>{participant.fullName}</h5>
        <div className={s.menuWrap}>
          <div className={s.menuBtn} />
        </div>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className={s.chatBox}>{messageList}</div>
          <input
            className={s.input}
            placeholder="Type your message here.."
            onChange={handleChange}
            onKeyPress={sendMessage}
            value={text}
          />
        </>
      )}
    </>
  );
}

Chat.propTypes = {
  messages: T.array,
  sendMessage: T.func,
  text: T.string,
  handleChange: T.func,
  isLoading: T.bool,
  chat: T.object,
};

Chat.defaultProps = {
  messages: null,
  isLoading: false,
  sendMessage: () => {},
  text: '',
  chat: null,
  handleChange: () => {},
};

export default Chat;
