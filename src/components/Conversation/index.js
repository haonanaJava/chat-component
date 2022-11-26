import React from "react";
import PropTypes from "prop-types";
import StyledConversation, { Conversations, MyChatBubble } from "./style";
import TitleBar from "components/TitleBar";
import ChatBubble from "components/ChatBubble";
import Footer from "components/Footer";

function Conversation({ children, ...rest }) {
  return (
    <StyledConversation {...rest}>
      <TitleBar />
      <Conversations>
        <ChatBubble time="昨天 下午 7:30">你好</ChatBubble>
        <MyChatBubble time="昨天 下午 7:31">你好</MyChatBubble>
        <ChatBubble time="昨天 下午 7:32">你叫什么名字</ChatBubble>
        <MyChatBubble time="昨天 下午 7:33">我叫小明</MyChatBubble>
        <ChatBubble time="昨天 下午 7:34">Fuck You Baby!!!</ChatBubble>
      </Conversations>
      <Footer />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
