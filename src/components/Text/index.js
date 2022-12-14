import React from "react";
import PropTypes from "prop-types";
import StyledText from "./style";

function Text({ children, type = "primary", size = "normal", bold, ...rest }) {
  return (
    <StyledText type={type} size={size} bold={bold} {...rest}>
      {children}
    </StyledText>
  );
}

Text.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf([
    "large",
    "xlarge",
    "xxlarge",
    "normal",
    "medium",
    "small",
    "xsmall",
    "xxsmall",
  ]),
};

export default Text;
