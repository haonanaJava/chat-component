import StyledIcon from "components/Icon/style";
import styled from "styled-components";

const Title = styled.div`
  display: grid;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${StyledIcon} {
    cursor: pointer;
  }
`;

const StyledTitleBar = styled.div`
  display: grid;
  grid-template-columns: 62px 1fr 112px;
  padding: 30px;
  max-height: 110px;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
`;

export default StyledTitleBar;

export { Title, Actions };
