import React from 'react';
import cx from 'classnames';
import s from './SearchBox.module.scss';
import { Button } from '../../atoms';

function SearchBox() {
  return (
    <div className={s.wrapper}>
      <div className={s.searchBox}>
        <div className={s.inputWrap}>
          <img src="/img/search.svg" className={s.search__img} alt="search" />
          <input
            type="text"
            placeholder="Search products by name"
            className={cx(s.search, s.input)}
          />
        </div>
        <div className={s.inputWrap}>
          <img
            src="/img/location.svg"
            className={s.location__img}
            alt="locaton"
          />
          <input
            type="text"
            placeholder="Location"
            className={cx(s.location, s.input)}
          />
        </div>
        <Button fClass="search-btn">SEARCH</Button>
      </div>
    </div>
  );
}

export default SearchBox;
