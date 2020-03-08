import React from 'react';
import PropTypes from 'prop-types';
import DefaultButton from './Button.style';

const Button = ({ label, className, onClick }) => {
  return (
    <DefaultButton className={className} onClick={onClick}>
      {label}
    </DefaultButton>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: null,
  className: null,
  onClick: null,
};
