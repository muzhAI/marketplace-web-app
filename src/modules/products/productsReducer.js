import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
  latest: {
    items: [],
    isLoading: false,
    error: null,
    isError: false,
  },
  addProduct: {
    isLoading: false,
    error: null,
    isError: false,
  },
  product: {
    isLoading: false,
    error: null,
    isError: false,
  },
  sellerProducts: {
    isLoading: false,
    error: null,
    isError: false,
    items: [],
  },
  seller: {
    isLoading: false,
    error: null,
    isError: false,
  },
};

export default handleActions(
  {
    [actions.fetchLatest.start]: (state) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchLatest.success]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchLatest.error]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.addProduct.start]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.addProduct.success]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
      },
    }),
    [actions.addProduct.error]: (state, action) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.fetchProduct.start]: (state) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchProduct.success]: (state) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: false,
      },
    }),
    [actions.fetchProduct.error]: (state, action) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.fetchSellerProducts.start]: (state) => ({
      ...state,
      sellerProducts: {
        ...state.sellerProducts,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchSellerProducts.success]: (state, action) => ({
      ...state,
      sellerProducts: {
        ...state.sellerProducts,
        isLoading: false,
        items: action.payload.result.list,
      },
    }),
    [actions.fetchSellerProducts.error]: (state, action) => ({
      ...state,
      sellerProducts: {
        ...state.sellerProducts,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.fetchSeller.start]: (state) => ({
      ...state,
      seller: {
        ...state.seller,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchSeller.success]: (state) => ({
      ...state,
      seller: {
        ...state.product,
        isLoading: false,
      },
    }),
    [actions.fetchSeller.error]: (state, action) => ({
      ...state,
      seller: {
        ...state.product,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
