import React from 'react';
import T from 'prop-types';
import cx from 'classnames';
import s from './Button.module.scss';

function Button({ children, onClick, fClass }) {
  return (
    <button type="button" onClick={onClick} className={cx(s.btn, s[fClass])}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: T.node,
  onClick: T.func,
  fClass: T.string,
};
Button.defaultProps = {
  children: 'Button',
  onClick: () => {},
  fClass: '',
};

export default Button;
