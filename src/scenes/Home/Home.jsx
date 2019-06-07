import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, SearchBox } from '../../components';
import { routes } from '../router';
import { SellLink } from '../components';
import s from './Home.module.scss';
import LatestList from '../LatestList/LatestListContainer';
import Product from '../Product/ProductContainer';
import User from '../User/UserContainer';
import Search from '../Search/Search';

function Home() {
  return (
    <>
      <Header light={false}>
        <SellLink />
        <SearchBox />
      </Header>
      <div className={s.container}>
        <Switch>
          <Route exact path={routes.home} component={LatestList} />
          <Route path={routes.product} component={Product} />
          <Route path={routes.user} component={User} />
          <Route path={routes.search} component={Search} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default Home;
