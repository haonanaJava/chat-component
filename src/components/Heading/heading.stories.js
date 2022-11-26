import React from "react";
import Heading from ".";

export default {
  title: "排版/Heading",
  component: Heading,
};

export const Heading1 = () => <Heading level={1}>一级标题</Heading>;

export const Heading2 = () => <Heading level={2}>二级标题</Heading>;

export const Heading3 = () => <Heading level={3}>三级标题</Heading>;

export const Heading4 = () => <Heading level={4}>四级标题</Heading>;

export const Heading5 = () => <Heading level={5}>五级标题</Heading>;

export const Heading6 = () => <Heading level={6}>六级标题</Heading>;
