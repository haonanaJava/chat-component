import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  background: transparent;
  font-size: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.grayDark};
  display: block;
  &::placeholder {
    color: ${({ theme }) => theme.gray3};
  }
`;

export const Prefix = styled.div`
  margin-right: 16px;
`;

export const Suffix = styled.div`
  margin-left: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.gray2};
  border-radius: 24px;
  padding: 0 30px;

`;

export default StyledInput;
