import React from "react";
import PropTypes from "prop-types";
import { StyledAvatar, StyledClip, StatusIcon, StyledImage } from "./style";

const Avatar = ({ src, size = "48px", status, statusIconSize, ...rest }) => {
  return (
    <StyledAvatar {...rest}>
      {status && (
        <StatusIcon status={status} size={statusIconSize}></StatusIcon>
      )}
      <StyledClip size={size}>
        <StyledImage src={src} alt="" />
      </StyledClip>
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(["online", "offline"]),
  statusIconSize: PropTypes.string,
};

export default Avatar;
