import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import React from "react";
import PropTypes from "prop-types";

function SocialIcon({ icon, href, bgColor, ...rest }) {
  return (
    <Button
      size="30px"
      bgColor={bgColor}
      onClick={() => href && window.open(href, "_blank")}
      {...rest}
    >
      <FontAwesomeIcon icon={icon} style={{ fontSize: "16px" }} />
    </Button>
  );
}

SocialIcon.propTypes = {
  icon: PropTypes.elementType,
  bgColor: PropTypes.string,
  href: PropTypes.string,
};

export default SocialIcon;
