import { normalize } from 'normalizr';
import * as actions from './productsActions';
import Api, { schemas } from '../../api';
import { colorSetter } from '../../utils/avatarsColorSetter';

export function fetchLatest() {
  return async function fetchLatestThunk(dispatch) {
    try {
      dispatch(actions.fetchLatest.start());

      const result = await Api.Products.getLatest();
      const data = normalize(result.data, schemas.ProductList);

      await dispatch(actions.fetchLatest.success(data));
    } catch (err) {
      dispatch(actions.fetchLatest.error({ message: err.message }));
    }
  };
}

export function addProduct(body) {
  return async function addProductThunk(dispatch) {
    try {
      dispatch(actions.addProduct.start());

      const result = await Api.Products.addProduct(body);
      const data = normalize(result.data, schemas.Product);

      await dispatch(actions.addProduct.success(data));
    } catch (err) {
      dispatch(actions.addProduct.error({ message: err.message }));
      throw err;
    }
  };
}

export function fetchProduct(id) {
  return async function fetchProductThunk(dispatch) {
    try {
      dispatch(actions.fetchProduct.start());

      const result = await Api.Products.get(id);
      const data = normalize(
        colorSetter(result.data),
        schemas.ProductWithOwner,
      );

      await dispatch(actions.fetchProduct.success(data));
    } catch (err) {
      dispatch(actions.fetchProduct.error({ message: err.message }));
    }
  };
}

export function fetchSeller(id) {
  return async function fetchSellerThunk(dispatch) {
    try {
      dispatch(actions.fetchSeller.start());

      const result = await Api.Products.getSeller(id);
      const data = normalize(colorSetter(result.data), schemas.user);

      dispatch(actions.fetchSeller.success(data));
    } catch (err) {
      dispatch(actions.fetchSeller.error({ message: err.message }));
    }
  };
}

export function fetchSellerProducts(id) {
  return async function fetchSellerProductsThunk(dispatch) {
    try {
      dispatch(actions.fetchSellerProducts.start());

      const result = await Api.Products.getSellerProducts(id);
      const data = normalize(result.data, schemas.sellerList);

      dispatch(actions.fetchSellerProducts.success(data));
    } catch (err) {
      dispatch(actions.fetchSellerProducts.error({ message: err.message }));
    }
  };
}
