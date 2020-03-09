import React from 'react';
import PropTypes from 'prop-types';
import DefaultButton from './Button.style';

const Button = ({ label, className, disabled, onClick }) => {
  return (
    <DefaultButton className={className} onClick={onClick} disabled={disabled}>
      {label}
    </DefaultButton>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: null,
  className: null,
  disabled: false,
  onClick: null,
};
