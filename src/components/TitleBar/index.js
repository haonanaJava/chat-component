import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Actions, Title } from "./style";
import Avatar from "components/Avatar";
import face1 from "assets/images/face-female-1.jpg";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";
import { ReactComponent as Call } from "assets/icons/call.svg";
import { ReactComponent as Camera } from "assets/icons/camera.svg";
import { ReactComponent as Options } from "assets/icons/options.svg";

function TitleBar({ children, ...rest }) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar status="offline" src={face1} />
      <Title>
        <Paragraph size="large">慕容天宇</Paragraph>
        <Paragraph type="secondary">
          <Text>离线</Text>
          <Text>· 最后阅读: 3小时</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon icon={Call} opacity={0.3} />
        <Icon icon={Camera} opacity={0.3} />
        <Icon icon={Options} opacity={0.3} />
      </Actions>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
};

export default TitleBar;
