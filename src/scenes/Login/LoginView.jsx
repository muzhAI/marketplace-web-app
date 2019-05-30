import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import s from './Login.module.scss';
import { routes } from '../router';
import { Button, Input } from '../../atoms';

function LoginView({
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
          initialValues={{ email: '', password: '' }}
          onSubmit={(body) => {
            handleLogin(body);
          }}
        >
          {(props) => (
            <Form className={s.form}>
              <div className={s.container}>
                <Input
                  onChange={props.handleChange('email')}
                  label="EMAIL"
                  name="email"
                  placeholder="Example@gmail.com"
                  autoComplete="off"
                  type="mail"
                />
              </div>
              <div className={s.container}>
                <Input
                  onChange={props.handleChange('password')}
                  label="PASSWORD"
                  name="password"
                  type={isPasswordVisible ? 'text' : 'password'}
                />
                <img
                  src="/images/icons/eye.svg"
                  onClick={handlePasswordToggle}
                  className={s.eye}
                  alt="eye"
                />
                <p className={s.passRecoverLink}>Don't remember password?</p>
              </div>

              <Button
                outerClass="auth-btn"
                type="submit"
                onSubmit={props.handleSubmit}
              >
                {isLoading ? 'Loading...' : 'Continue'}
              </Button>
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

LoginView.propTypes = {
  handleSubmit: T.func,
  handleChange: T.func,
  handleLogin: T.func,
  isLoading: T.bool,
  handlePasswordToggle: T.func,
  isPasswordVisible: T.bool,
};

LoginView.defaultProps = {
  handleSubmit: () => {},
  handleChange: () => {},
  handleLogin: () => {},
  handlePasswordToggle: () => {},
  isPasswordVisible: false,
  isLoading: false,
};

export default LoginView;
