import React from 'react';
// import T from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from '../router';
import { Button } from '../../atoms';

function Register() {
  return (
    <div>
      <Button fClass="wide-btn">Register</Button>
      <Link to={routes.login}>LOG IN</Link>
    </div>
  );
}

Register.propTypes = {};

export default Register;
