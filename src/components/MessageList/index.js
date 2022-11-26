import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";
import Filter from "components/Filter";
import Select from "components/Select";
import Option from "components/Option";
import Button from "components/Button";
import Icon from "components/Icon";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import Input from "components/Input";
import MessageCard from "components/MessageCard";
import face1 from "assets/images/face-male-1.jpg";

function MessageList({ children, ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <Input.Search />
      <ChatFilter />
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
    </StyledMessageList>
  );
}

function ChatFilter({ children, ...rest }) {
  return (
    <Filter style={{ padding: "20px 0" }}>
      <Filter.Filters label="列表排序">
        <Select>
          <Option>最新消息优先</Option>
          <Option>在线好友优先</Option>
        </Select>
      </Filter.Filters>
      <Filter.Action label="创建会话">
        <Button>
          <Icon icon={Plus} width={12} height={12} />
        </Button>
      </Filter.Action>
    </Filter>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
