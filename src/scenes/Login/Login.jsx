import React from 'react';
import T from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { withHandlers, compose } from 'recompose';
import { routes } from '../router';
import { Button } from '../../atoms';
import Api from '../../api';

function Login({ handleLogin }) {
  return (
    <div>
      <Button fClass="wide-btn" onClick={handleLogin}>
        LOG IN
      </Button>
      <Link to={routes.register}> REGISTER NOW</Link>
    </div>
  );
}

Login.propTypes = {
  handleLogin: T.func,
};
const enhancer = compose(
  withRouter,
  withHandlers({
    handleLogin: (props) => () => {
      Api.Auth.login();
      props.history.push(routes.home);
    },
  }),
);
export default enhancer(Login);
