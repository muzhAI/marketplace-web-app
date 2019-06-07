import React from 'react';
import T from 'prop-types';
import s from './ProductsContainer.module.scss';
import ProductCard from '../ProductCard/ProductCard';

function ProductsContainer({ products }) {
  return (
    <div className={s.container}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

ProductsContainer.propTypes = {
  products: T.array.isRequired,
};

export default ProductsContainer;
