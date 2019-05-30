import React from 'react';
import T from 'prop-types';
import cn from 'classnames';
import s from './Button.module.scss';

function Button({ children, onClick, outerClass, disabled, ...attrs }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(s.btn, s[outerClass])}
      {...attrs}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: T.node,
  onClick: T.func,
  outerClass: T.string,
  disabled: T.bool,
};
Button.defaultProps = {
  children: 'Button',
  onClick: () => {},
  outerClass: '',
  disabled: false,
};

export default Button;
