import React from 'react';
import T from 'prop-types';
import cn from 'classnames';
import s from './Input.module.scss';

function Input({ label, name, onChange, outerClass, ...attrs }) {
  return (
    <label className={s.label} htmlFor={name}>
      {label}
      <input
        name={name}
        onChange={onChange}
        id={name}
        className={cn(s.input, s[outerClass])}
        type="text"
        {...attrs}
      />
    </label>
  );
}

Input.propTypes = {
  label: T.string,
  name: T.string,
  outerClass: T.string,
  onChange: T.func,
};

Input.defaultProps = {
  label: '',
  name: '',
  outerClass: '',
  onChange: () => {},
};

export default Input;
