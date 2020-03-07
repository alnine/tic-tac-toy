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
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: null,
};
