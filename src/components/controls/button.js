import React, {PropTypes} from 'react';
import './controls.scss';

const resolveButtonLabel = (children, label) => {
  if (typeof children === 'string' && children.length > 0) {
    return children;
  } else if (typeof label === 'string' && label.length > 0) {
    return label;
  }

  return 'Label';
};

const Button = ({children, label, onClick, className}) => (
  <button onClick={onClick} className={`btn ${className}`}>{resolveButtonLabel(children, label)}</button>
);

Button.propTypes = {
  children: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: null,
  children: null,
};

export default Button;
