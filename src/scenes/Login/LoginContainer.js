import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginView from './LoginView';
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

const enhance = compose(
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
    handleLogin: (props) => async (body) => {
      try {
        await props.login(body);
        props.history.push(routes.home);
      } catch (err) {
        throw err;
      }
    },
  }),
);

export default enhance(LoginView);
