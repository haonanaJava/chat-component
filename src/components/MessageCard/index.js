import React from "react";
import PropTypes from "prop-types";
import StyledMessageCard, {
  Message,
  MessageText,
  Name,
  Status,
  Time,
  UnreadBadge,
} from "./style";
import Avatar from "components/Avatar";
import { useTheme } from "styled-components";
import { ReactComponent as Replied } from "assets/icons/replied.svg";
import Icon from "components/Icon";

function MessageCard({
  avatarSrc,
  avatarStatus,
  statusText,
  name,
  time,
  message,
  unreadCount,
  active,
  replied,
  ...rest
}) {
  const theme = useTheme();

  return (
    <StyledMessageCard active={active} {...rest}>
      <Avatar src={avatarSrc} status={avatarStatus} />
      <Name>{name}</Name>
      <Status>{statusText}</Status>
      <Time>{time}</Time>
      <Message replied={replied}>
        {replied && (
          <Icon
            icon={Replied}
            width={16}
            height={14}
            color={active ? theme.inactiveColorDark : theme.inactiveColor}
            opacity={active ? 0.4 : 1}
            style={{ justifyContent: "start" }}
          />
        )}
        <MessageText>{message}</MessageText>
        <UnreadBadge count={unreadCount} />
      </Message>
    </StyledMessageCard>
  );
}

MessageCard.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  avatarStatus: PropTypes.oneOf(["online", "offline"]),
  statusText: PropTypes.string,
  name: PropTypes.any,
  time: PropTypes.any,
  message: PropTypes.any,
  unreadCount: PropTypes.number,
  active: PropTypes.bool,
  replied: PropTypes.bool,
};

export default MessageCard;
