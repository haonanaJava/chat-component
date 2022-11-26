import Button from "components/Button";
import React from "react";
import Popover from ".";

export default {
  title: "UI 组件/Popover",
  component: Popover,
};

export const Default = () => (
  <div
    style={{
      height: "50vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Popover content="Hello World">
      <Button shape="rect">点我</Button>
    </Popover>
  </div>
);

export const WidthOffset = () => (
  <div
    style={{
      height: "50vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Popover offset={{ x: "-25%" }} content="Hello World">
      <Button shape="rect">点我</Button>
    </Popover>
  </div>
);
