import React from 'react';
import { Header, Footer, SearchBox } from '../../components';

export default function Home() {
  return (
    <>
      <Header light={false}>
        <SearchBox />
      </Header>
      <main className="main">
        <h1>Home</h1>
      </main>

      <Footer />
    </>
  );
}
