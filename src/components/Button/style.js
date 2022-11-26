import styled, { css } from "styled-components";

const shapeVariants = {
  circle: css`
    border-radius: 50%;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    display: inline-flex;
    justify-content: center;
    align-items: center;
  `,
  rect: css`
    border-radius: 6px;
    padding: 12px 18px;
  `,
};

const typeVariants = {
  primary: css`
    background-color: ${({ theme, bgColor }) => bgColor || theme.primaryColor};
    color: white;
  `,
};

const StyledButton = styled.button`
  ${({ shape }) => shapeVariants[shape]}
  ${({ type }) => typeVariants[type]}
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}

  transform: scale(1);
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  }
`;

export default StyledButton;
