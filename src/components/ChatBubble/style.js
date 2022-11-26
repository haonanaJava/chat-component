import styled, { css } from "styled-components";
import Paragraph from "components/Paragraph";
import Icon from "components/Icon";
import Text from "components/Text";

const Time = styled(Paragraph).attrs({ type: "secondary", size: "small" })`
  margin: 6px;
  margin-left: 24px;
  word-spacing: 1rem;
`;

const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;

  z-index: 5;
`;

const MessageText = styled(Text)``;

const Bubble = styled.div`
  border-radius: 100px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 15px 22px;
  position: relative;
  z-index: 10;
`;

const typeVariants = {
  mine: css`
    ${Bubble} {
      background-color: ${({ theme }) => theme.primaryColor};
    }

    ${BubbleTip} {
      transform: rotateY(180deg);
      left: unset;
      right: 0;

      path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }

    ${MessageText} {
      color: white;
    }

    ${Time} {
      text-align: right;
      margin-left: 0;
      margin-right: 24px;
    }
  `,
};

const StyledChatBubble = styled.div`
  display: flex;
  flex-direction: column;

  ${({ type }) => type && typeVariants[type]}
`;

export default StyledChatBubble;

export { Bubble, BubbleTip, MessageText, Time };
