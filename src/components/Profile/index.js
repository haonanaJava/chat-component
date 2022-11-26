import React from "react";
import PropTypes from "prop-types";
import StyledProfile, {
  Album,
  AlbumSection,
  AlbumTitle,
  CloseIcon,
  ContactSection,
  Photo,
  SocialLinks,
} from "./style";
import "styled-components/macro";
import Avatar from "components/Avatar";
import face3 from "assets/images/face-female-3.jpg";
import Paragraph from "components/Paragraph";
import {
  faGithub,
  faLinkedin,
  faWeibo,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "components/Icon";
import Seperator from "components/Seperator";
import Text from "components/Text";
import photo1 from "assets/images/photo1.jpg";
import photo2 from "assets/images/photo2.jpg";
import photo3 from "assets/images/photo3.jpg";
import { ReactComponent as Cross } from "assets/icons/cross.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Button from "components/Button";

function Profile({ showEditBtn, onEdit, showCloseIcon, status, ...rest }) {
  return (
    <StyledProfile {...rest}>
      {showCloseIcon && <CloseIcon icon={Cross} />}
      <Avatar
        src={face3}
        status={status}
        css={`
          margin: 26px 0;
          grid-area: 1 / 1 / 3 / 2;
        `}
        size="160px"
        statusIconSize="25px"
      />
      {showEditBtn && (
        <Button
          size="52px"
          onClick={onEdit}
          css={`
            grid-area: 1 / 1 / 3 / 2;
            align-self: end;
            z-index: 10;
            margin-left: 100px;
          `}
        >
          <FontAwesomeIcon
            css={`
              font-size: 24px;
            `}
            icon={faPen}
          />
        </Button>
      )}
      <Paragraph
        size="xlarge"
        css={`
          margin-bottom: 12px;
        `}
      >
        梅西
      </Paragraph>
      <Paragraph
        type="secondary"
        size="medium"
        css={`
          margin-bottom: 16px;
        `}
      >
        阿根廷，巴萨罗纳俱乐部10号球衣拥有者
      </Paragraph>
      <Paragraph
        css={`
          margin-bottom: 26px;
        `}
      >
        世界上最好的球员之一，曾经获得过世界杯冠军，欧洲杯冠军，金球奖，欧洲金靴，世界足球先生等等
      </Paragraph>
      <SocialLinks>
        <Icon.Social
          icon={faGithub}
          href="http://www.github.com"
          bgColor="black"
        />
        <Icon.Social
          icon={faWeibo}
          href="http://www.weibo.com"
          bgColor="#f06767"
        />
        <Icon.Social icon={faLinkedin} bgColor="#248370" />
      </SocialLinks>
      <Seperator
        css={`
          margin: 26px 0;
        `}
      />

      <ContactSection>
        <Description label="联系电话">17354312163</Description>
        <Description label="电子邮箱">1216044881@qq.com</Description>
        <Description label="个人网站"></Description>
      </ContactSection>

      <Seperator
        css={`
          margin: 26px 0;
        `}
      />

      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">相册（31）</Text>
          <a>查看全部</a>
        </AlbumTitle>
        <Album>
          <Photo src={photo1} alt="" />
          <Photo src={photo2} alt="" />
          <Photo src={photo3} alt="" />
        </Album>
      </AlbumSection>
    </StyledProfile>
  );
}

function Description({ children, label, ...rest }) {
  return (
    <Paragraph>
      <Text type="secondary">{label}:</Text>
      <Text>{children}</Text>
    </Paragraph>
  );
}

Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
