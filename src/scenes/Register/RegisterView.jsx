import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { routes } from '../router';
import { Button, Input } from '../../atoms';

import s from './RegisterView.module.scss';

function RegisterView({
  handleRegister,
  isLoading,
  handlePasswordToggle,
  isPasswordVisible,
}) {
  return (
    <div className={s.formWrapper}>
      <div className={s.registerBox}>
        <h3 className={s.registerBox__title}>Register</h3>
        <Formik
          initialValues={{
            email: '',
            password: '',
            // passwordAgain: '',
            fullName: '',
          }}
          onSubmit={(body) => {
            handleRegister(body);
          }}
        >
          {(props) => (
            <Form className={s.form}>
              <div className={s.container}>
                <Input
                  onChange={props.handleChange}
                  label="email"
                  name="email"
                  placeholder="Example@gmail.com"
                  type="mail"
                  autoComplete="off"
                />
              </div>
              <div className={s.container}>
                <Input
                  onChange={props.handleChange}
                  label="full name"
                  autoComplete="off"
                  name="fullName"
                  type="text"
                />
              </div>
              <div className={s.container}>
                <Input
                  onChange={props.handleChange}
                  label="password"
                  name="password"
                  type={isPasswordVisible ? 'text' : 'password'}
                />
                <img
                  src="/images/icons/eye.svg"
                  onClick={handlePasswordToggle}
                  className={s.eye}
                  alt="eye"
                />
              </div>
              <div className={s.container}>
                <Input
                  onChange={props.handleChange}
                  label="password again"
                  name="passwordAgain"
                  type={isPasswordVisible ? 'text' : 'password'}
                />
                <img
                  src="/images/icons/eye.svg"
                  onClick={handlePasswordToggle}
                  className={s.eye}
                  alt="eye"
                />
              </div>
              <Button
                onSubmit={props.handleSubmit}
                outerClass="auth-btn"
                type="submit"
              >
                {isLoading ? 'Loading...' : 'Register'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className={s.linkBox}>
        <p className={s.linkBox__text}>
          I already have an account,
          <Link className={s.linkBox__link} to={routes.login}>
            {' '}
            LOG IN
          </Link>
        </p>
      </div>
    </div>
  );
}

RegisterView.propTypes = {
  handleSubmit: T.func,
  handleChange: T.func,
  handleRegister: T.func,
  isLoading: T.bool,
  handlePasswordToggle: T.func,
  isPasswordVisible: T.bool,
};

RegisterView.defaultProps = {
  handleSubmit: () => {},
  handleChange: () => {},
  handleRegister: () => {},
  handlePasswordToggle: () => {},
  isPasswordVisible: false,
  isLoading: false,
};

export default RegisterView;
