import React from 'react';
import { Header, Footer } from '../../components';
import { SellLink } from '../components';

export default function Privacy() {
  return (
    <>
      <Header light>
        <SellLink />
      </Header>
      <main className="main">
        <h1>Terms & Conditions</h1>
      </main>
      <Footer />
    </>
  );
}
