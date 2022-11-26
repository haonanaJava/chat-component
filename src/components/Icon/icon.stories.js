import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "UI 组件/Icon",
  component: Icon,
};

export const Default = () => <Icon icon={SmileIcon}></Icon>;

export const Color = () => <Icon icon={SmileIcon} color="#cccccc"></Icon>;

export const Sizes = () => (
  <Icon icon={SmileIcon} color="#cccccc" width={48} height={48}></Icon>
);

export const Opacity = () => (
  <Icon icon={SmileIcon} color="#cccccc" opacity={0.6}></Icon>
);

export const FontAwesome = () => (
  <FontAwesomeIcon icon={faCommentDots}  />
);
