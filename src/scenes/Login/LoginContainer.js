import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './LoginView';
import { authOperations } from '../../modules/auth';
import { routes } from '../router';

function mapStateToProps(state) {
  return {
    isLoading: state.auth.login.isLoading,
  };
}

const mapDispatchToProps = {
  login: authOperations.login,
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
    handleLogin: ({ login, history }) => async (body) => {
      try {
        await login(body);
        history.push(routes.home);
      } catch (err) {
        throw err;
      }
      // TODO: handle errors
    },
  }),
);

export default enhancer(Login);
