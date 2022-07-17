import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { color, text } = props;
  return (
    <button style={{ backgroundColor: color }} className="btn" {...props}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
