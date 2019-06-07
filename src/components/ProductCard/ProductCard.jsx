import React from 'react';
import T from 'prop-types';
import { Link, generatePath } from 'react-router-dom';
import { withState, withHandlers, compose } from 'recompose';
import s from './ProductCard.module.scss';
import { routes } from '../../scenes/router';

function ProductCard({
  title,
  price,
  photos,
  id,
  imageErrorHandler,
  isImageError,
}) {
  const photo = photos && photos[0];
  const placeholder =
    'https://via.placeholder.com/200x146.png?text=NO PRODUCT IMAGE';
  let productPhoto = photo || placeholder;
  if (isImageError) {
    productPhoto = placeholder;
  }
  return (
    <Link className={s.link} to={generatePath(routes.product, { id })}>
      <div className={s.product}>
        <div className={s.container}>
          <img
            className={s.image}
            src={productPhoto}
            alt={title}
            onError={imageErrorHandler}
          />
        </div>
        <h6 className={s.title}>{title}</h6>
        <p className={s.price}>{`$${price}`}</p>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  title: T.string.isRequired,
  price: T.number,
  photos: T.array,
  id: T.string.isRequired,
  isImageError: T.bool,
  imageErrorHandler: T.func,
};

ProductCard.defaultProps = {
  price: 'contract price',
  photos: null,
  isImageError: false,
  imageErrorHandler: () => {},
};

const enhancer = compose(
  withState('isImageError', 'imageToggle', false),
  withHandlers({
    imageErrorHandler: ({ imageToggle }) => () => {
      imageToggle(true);
    },
  }),
);

export default enhancer(ProductCard);
