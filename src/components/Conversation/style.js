import ChatBubble from "components/ChatBubble";
import styled from "styled-components";

const Conversations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 15px;
  width: 100%;
  flex: 1;
  overflow-y: auto;

  & > * {
    margin: 10px 0;
  }
`;

const MyChatBubble = styled(ChatBubble).attrs({ type: "mine" })`
  align-self: end;
`;

const StyledConversation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  border: 1px solid ${({ theme }) => theme.gray4};

  & > :last-child {
    align-self: flex-end;
  }
`;

export default StyledConversation;

export { Conversations, MyChatBubble };
