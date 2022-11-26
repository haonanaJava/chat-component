import React from "react";
import PropTypes from "prop-types";
import StyledNavBar, { MenuIcon, MenuItems, StyledMenuItem } from "./style";
import Badge from "components/Badge";
import ProfileImage from "assets/images/face-male-1.jpg";
import {
  faCog,
  faCommentDots,
  faEllipsisH,
  faFolder,
  faStickyNote,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "components/Avatar";
import "styled-components/macro";

function NavBar({ ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={ProfileImage} status="online" />
      <MenuItems>
        <MenuItem showBadge active icon={faCommentDots} />
        <MenuItem icon={faUser} />
        <MenuItem icon={faFolder} />
        <MenuItem icon={faStickyNote} />
        <MenuItem icon={faEllipsisH} />
        <MenuItem
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem({ icon, active, showBadge, ...rest }) {
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon icon={icon} active={active} />
        </Badge>
      </a>
    </StyledMenuItem>
  );
}

NavBar.propTypes = {};

export default NavBar;

export { MenuItem };
