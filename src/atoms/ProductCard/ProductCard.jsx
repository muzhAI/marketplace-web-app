import React from 'react';
import T from 'prop-types';
import s from './ProductCard.module.scss';

function ProductCard({ name, price, imageURL }) {
  return (
    <div className={s.product}>
      <img className={s.product__image} src={imageURL} alt={name} />
      <h6 className={s.product__name}>{name}</h6>
      <p className={s.product__price}>{price}</p>
    </div>
  );
}

ProductCard.propTypes = {
  name: T.string,
  price: T.string,
  imageURL: T.string,
};

export default ProductCard;
