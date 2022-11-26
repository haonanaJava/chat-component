import styled from "styled-components";
import arrowRight from "assets/icons/arrowRight.svg";
import Icon from "components/Icon";

const SocialLinks = styled.div`
  & > * {
    margin: 0 9px;
  }
`;

const ContactSection = styled.div`
  display: grid;
  row-gap: 18px;
`;

const AlbumTitle = styled.div`
  justify-self: stretch;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;

    &::after {
      display: inline-blobk;
      content: url(${arrowRight});
      margin-left: 2px;
    }
  }
`;

const AlbumSection = styled.section``;

const Album = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-self: start;
  width: 100%;
  margin-top: 14px;
`;

const Photo = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
`;

const CloseIcon = styled(Icon).attrs({ opacity: 0.3 })`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;

const StyledProfile = styled.div`
  display: grid;
  align-content: start;
  justify-content: center;
  justify-items: center;

  position: relative;
  height: 100vh;
  overflow-y: auto;

  padding: 30px;
  margin-top: 2vh;
`;

export default StyledProfile;

export {
  SocialLinks,
  ContactSection,
  AlbumTitle,
  AlbumSection,
  Album,
  Photo,
  CloseIcon,
};
