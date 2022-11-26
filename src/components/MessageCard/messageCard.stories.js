import React from "react";
import MessageCard from ".";
import face1 from "assets/images/face-male-1.jpg";

export default {
  title: "UI 组件/MessageCard",
  component: MessageCard,
};

export const DefaultCard = () => (
  <MessageCard
    avatarSrc={face1}
    avatarStatus="online"
    name="周杰伦"
    statusText="在线"
    time="下午 2:00"
    message="你好，我是周杰伦"
    unreadCount={3}
  />
);

export const ActiveCard = () => (
  <MessageCard
    active
    avatarSrc={face1}
    avatarStatus="online"
    name="周杰伦"
    statusText="在线"
    time="下午 2:00"
    message="你好，我是周杰伦"
    unreadCount={3}
  />
);

export const RepliedCard = () => (
  <MessageCard
    replied
    active
    avatarSrc={face1}
    avatarStatus="online"
    name="周杰伦"
    statusText="在线"
    time="下午 2:00"
    message="你好，我是周杰伦"
    unreadCount={3}
  />
);

export const RepliedInactiveCard = () => (
  <MessageCard
    replied
    avatarSrc={face1}
    avatarStatus="online"
    name="周杰伦"
    statusText="在线"
    time="下午 2:00"
    message="你好，我是周杰伦"
    unreadCount={3}
  />
);
