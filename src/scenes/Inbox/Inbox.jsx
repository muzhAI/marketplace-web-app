import React from 'react';
// import T from 'prop-types';
// import s from './Inbox.module.scss';
import { Header } from '../../components';
import { SellLink } from '../components';

function Inbox() {
  return (
    <>
      <Header>
        <SellLink />
      </Header>
      <div>
        <h1>Inbox</h1>
      </div>
    </>
  );
}

Inbox.propTypes = {};

export default Inbox;
