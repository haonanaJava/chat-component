import React from "react";
import PropTypes from "prop-types";
import StyledVoiceMessage from "./style";
import Button from "components/Button";
import { ReactComponent as Play } from "assets/icons/play.svg";
import { useTheme } from "styled-components";
import { ReactComponent as Wave } from "assets/icons/wave.svg";
import Icon from "components/Icon";
import Text from "components/Text";

function VoiceMessage({ children, time, type, ...rest }) {
  const theme = useTheme();
  return (
    <StyledVoiceMessage type={type} {...rest}>
      <Button size="40px">
        <Icon
          width="14"
          height="16"
          icon={Play}
          color="white"
          style={{ transform: "translateX(1px)" }}
        />
      </Button>
      <Icon icon={Wave} width="100%" height="100%" color={theme.primaryColor} />
      <Text bold>{time}</Text>
    </StyledVoiceMessage>
  );
}

VoiceMessage.propTypes = {
  children: PropTypes.any,
  time: PropTypes.string,
  type: PropTypes.oneOf(["mine"]),
};

export default VoiceMessage;
