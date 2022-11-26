import styled from "styled-components";

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.gray4};
  border-radius: 16px;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: "";
    height: 28px;
    width: 28px;
    border-radius: 50%;
    left: 1px;
    top: 1px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + ${Slider} {
    background-color: ${({ theme }) => theme.primaryColor};

    ::before {
      transform: translateX(20px);
    }
  }
`;

const StyledSwitch = styled.label`
  width: 51px;
  height: 31px;
  position: relative;
  display: inline-block;
`;

export default StyledSwitch;

export { Slider, Checkbox };
