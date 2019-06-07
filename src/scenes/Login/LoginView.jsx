import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import s from './Login.module.scss';
import { routes } from '../router';
import { Button, FormInput } from '../../atoms';
import { loginSchema } from '../../utils/validationSchemas';

function Login({
  handleLogin,
  isLoading,
  handlePasswordToggle,
  isPasswordVisible,
}) {
  return (
    <div className={s.formWrapper}>
      <div className={s.loginBox}>
        <h3 className={s.loginBox__title}>Login</h3>
        <Formik
          validationSchema={loginSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={(body) => {
            handleLogin(body);
          }}
        >
          {() => (
            <Form className={s.form}>
              <Field
                primaryClass="authInput"
                label="EMAIL"
                name="email"
                placeholder="Example@gmail.com"
                type="mail"
                component={FormInput}
              />
              <div className={s.container}>
                <Field
                  primaryClass="authInput"
                  label="PASSWORD"
                  name="password"
                  type={isPasswordVisible ? 'text' : 'password'}
                  component={FormInput}
                />
                <img
                  src="/images/icons/eye.svg"
                  onClick={handlePasswordToggle}
                  className={s.eyeIcon}
                  alt="eye"
                />
                <p className={s.passRecoverLink}>Don't remember password?</p>
              </div>
              <div className={s.btnWrap}>
                <Button primaryClass="primary-btn" type="submit">
                  {isLoading ? 'Loading...' : 'Continue'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className={s.linkBox}>
        <p className={s.linkBox__text}>
          I have no account,
          <Link className={s.linkBox__link} to={routes.register}>
            {' '}
            REGISTER NOW
          </Link>
        </p>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleLogin: T.func,
  isLoading: T.bool,
  handlePasswordToggle: T.func,
  isPasswordVisible: T.bool,
};

Login.defaultProps = {
  handleLogin: () => {},
  handlePasswordToggle: () => {},
  isPasswordVisible: false,
  isLoading: false,
};

export default Login;
