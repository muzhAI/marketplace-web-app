import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Register from './RegisterView';
import { authOperations } from '../../modules/auth';
import { routes } from '../router';

function mapStateToProps(state) {
  return {
    isLoading: state.auth.register.isLoading,
  };
}

const mapDispatchToProps = {
  register: authOperations.register,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('isPasswordVisible', 'passwordToggle', false),
  withHandlers({
    handlePasswordToggle: ({ passwordToggle, isPasswordVisible }) => () => {
      passwordToggle(!isPasswordVisible);
    },
    handleRegister: (props) => async (body) => {
      try {
        await props.register(body);
        props.history.push(routes.home);
      } catch (err) {
        throw err;
      }
      // TODO: handle errors
    },
  }),
);

export default enhancer(Register);
