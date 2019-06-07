import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routes } from '../../router';
import { productsOperations } from '../../../modules/products';
import AddProductForm from './AddProductFormView';
import Api from '../../../api';

function mapStateToProps(state) {
  return {
    isLoading: state.products.addProduct.isLoading,
  };
}

const mapDispatchToProps = {
  addProduct: productsOperations.addProduct,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('isImageLoading', 'imageLoadingHandler', false),
  withHandlers({
    handleAddProduct: ({ addProduct, history }) => async (body) => {
      try {
        await addProduct(body);
        history.push(routes.home);
      } catch (err) {
        throw err;
      }
    },
    handleImageLoader: ({ imageLoadingHandler }) => async (event) => {
      imageLoadingHandler(true);
      const file = event.target.files[0];
      const data = new FormData();
      data.append('image', file);
      try {
        const result = await Api.Images.upload(data);
        imageLoadingHandler(false);
        return result.data;
      } catch (error) {
        imageLoadingHandler(false);
        // TODO: error handler
      }
    },
  }),
);

export default enhancer(AddProductForm);
