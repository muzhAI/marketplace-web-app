import React from 'react';
import T from 'prop-types';
import s from './Chat.module.scss';

function Chat({ messages, sendMessage, text, handleChange }) {
  return (
    <>
      <div className={s.header}>{/* <Avatar/> */}</div>
      <div className={s.chatBox}>
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>

      <input
        className={s.input}
        placeholder="Type your message here.."
        onChange={handleChange}
        onKeyPress={sendMessage}
        value={text}
      />
    </>
  );
}

Chat.propTypes = {
  sendMessage: T.func,
  text: T.string,
  handleChange: T.func,
};

Chat.defaultProps = {
  sendMessage: () => {},
  text: '',
  handleChange: () => {},
};

export default Chat;
