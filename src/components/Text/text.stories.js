import React from "react";
import Text from ".";

export default {
  title: "排版/Text",
  component: Text,
};

export const Default = () => <Text>默认</Text>;

export const Secondary = () => <Text type="secondary">次要</Text>;

export const Medium = () => <Text size="medium">中等</Text>;

export const LargeAndBold = () => (
  <Text size="large" bold>
    大号加粗
  </Text>
);
