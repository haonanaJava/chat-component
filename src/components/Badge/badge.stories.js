import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Badge from ".";

export default {
  title: "UI 组件/Badge",
  component: Badge,
};

export const Default = () => <Badge count={5} />;

export const DotVariant = () => (
  <Badge count={5} show>
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "24px" }} />
  </Badge>
);
