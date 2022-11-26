import styled from "styled-components";

const InputUnderline = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
  width: 100%;
  font-size: ${({ theme }) => theme.normal};
  background: none;

  &::placeholder {
    color: ${({ theme }) => theme.gray5};
  }

  :focus,
  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
  }
`;

const StyledInputText = styled.div`
  

`;

export default StyledInputText;

export { InputUnderline };
