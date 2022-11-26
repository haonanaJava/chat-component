import React from "react";
import Paragraph from ".";

export default {
  title: "排版/Paragraph",
  component: Paragraph,
};

export const Default = () => (
  <>
    <Paragraph>默认</Paragraph>
    <Paragraph>默认</Paragraph>
  </>
);

export const Ellipsis = () => (
  <Paragraph ellipsis>
    这是一段很长的文本 这是一段很长的文本 这是一段很长的文本 这是一段很长的文本
    这是一段很长的文本 这是一段很长的文本 这是一段很长的文本 这是一段很长的文本
    这是一段很长的文本 这是一段很长的文本 这是一段很长的文本 这是一段很长的文本
  </Paragraph>
);
