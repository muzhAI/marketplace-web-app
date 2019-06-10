import { compose, lifecycle, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Product from './ProductView';
import { productsOperations, productsSelectors } from '../../modules/products';

function mapStateToProps(state, { match }) {
  return {
    product: productsSelectors.getProduct(state, match.params.id),
    owner: productsSelectors.getProductOwner(state, match.params.id),
    isLoading: state.products.product.isLoading,
  };
}

const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    {
      isImageError: false,
      isModalOpen: false,
    },
    {
      imageErrorHandler: () => () => ({
        isImageError: true,
      }),
      toggleModal: ({ isModalOpen }) => () => ({
        isModalOpen: !isModalOpen,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      if (!this.props.owner || !this.props.product) {
        this.props.fetchProduct(this.props.match.params.id);
      }
    },
  }),
);

export default enhancer(Product);
