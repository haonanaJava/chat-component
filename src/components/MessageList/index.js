import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";
import MessageCard from "components/MessageCard";
import face1 from "assets/images/face-male-1.jpg";
import FilterList from "components/FilterList";

function MessageList({ children, ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={["最新消息优先", "在线好友优先"]}
        actionLabel="创建会话"
      >
        <ChatList>
          {Array.from({ length: 6 }, (v, k) => k).map((_, i) => (
            <MessageCard
              key={i}
              active={i === 3}
              replied={i % 3 === 0}
              avatarSrc={face1}
              avatarStatus="online"
              name="周杰伦"
              statusText="在线"
              time="下午 2:00"
              message="你好，我是周杰伦"
              unreadCount={3}
            />
          ))}
        </ChatList>
      </FilterList>
    </StyledMessageList>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
