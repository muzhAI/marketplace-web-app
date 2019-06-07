import React from 'react';
import T from 'prop-types';
import { ProductsFilter, ProductsContainer } from '../../components';

function LatestList({ list, isLoading }) {
  return (
    <>
      <ProductsFilter />
      {isLoading ? <h2>Loading...</h2> : <ProductsContainer products={list} />}
    </>
  );
}

LatestList.propTypes = {
  isLoading: T.bool,
};

LatestList.defaultProps = {
  isLoading: false,
};

export default LatestList;
