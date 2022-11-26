import VoiceMessage from "components/VoiceMessage";
import React from "react";
import ChatBubble from ".";

export default {
  title: "UI 组件/ChatBubble",
  component: ChatBubble,
};

export const Default = () => (
  <ChatBubble time="昨天 下午14:27">这是一条会话记录</ChatBubble>
);

export const Mine = () => (
  <ChatBubble type="mine" time="昨天 下午14:27">
    这是一条会话记录
  </ChatBubble>
);

export const VoiceMessageType = () => (
  <ChatBubble time="昨天 下午14:27">
    <VoiceMessage time="00: 14" />
  </ChatBubble>
);

export const VoiceMessageTypeMine = () => (
  <ChatBubble type="mine" time="昨天 下午14:27">
    <VoiceMessage type="mine" time="00: 14" />
  </ChatBubble>
);
