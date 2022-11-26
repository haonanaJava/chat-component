import styled, { css } from "styled-components";
import { circle } from "utils/mixins";

const circleMixinFunc = (color, size = "8px") => css`
  content: "";
  display: block;
  position: absolute;
  ${circle(color, size)}
`;

export const StyledAvatar = styled.div`
  position: relative;
`;

export const StatusIcon = styled.div`
  position: absolute;
  top: 2px;
  left: 4px;

  &::before {
    ${({ size }) => circleMixinFunc("white", size)}
    transform: scale(2);
  }

  &::after {
    ${({ theme, status, size }) => {
      if (status === "online") {
        return circleMixinFunc(theme.green, size);
      } else if (status === "offline") {
        return circleMixinFunc(theme.gray, size);
      }
    }}
  }
`;

export const StyledClip = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
