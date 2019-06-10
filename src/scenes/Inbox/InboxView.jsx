import React from 'react';
// import T from 'prop-types';
import { Link, Route, generatePath } from 'react-router-dom';
import s from './Inbox.module.scss';
import { Header } from '../../components';
import { SellLink } from '../components';
import { routes } from '../router';
import Chat from '../Chat/ChatContainer';

function Inbox({ chatsList, isLoading }) {
  return (
    <div className={s.container}>
      <Header>
        <SellLink />
      </Header>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className={s.chatsBox}>
          <aside className={s.aside}>
            {chatsList.map((chat) => (
              <Link
                to={generatePath(routes.chat, { id: chat.id })}
                className={s.chatItem}
                key={chat.id}
              >
                <p className={s.productName}>
                  {chat.product && chat.product.title}
                  <span className={s.messageTime}>
                    {chat.lastMessage &&
                      new Date(chat.lastMessage.createdAt).toLocaleDateString()}
                  </span>
                </p>
                <p className={s.lastMessage}>
                  {chat.lastMessage && chat.lastMessage.text}
                </p>
              </Link>
            ))}
          </aside>
          <div className={s.main}>
            <Route exact path={routes.chat} component={Chat} />
          </div>
        </div>
      )}
    </div>
  );
}

Inbox.propTypes = {};

export default Inbox;
