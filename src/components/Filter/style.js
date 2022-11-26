import StyledText from "components/Text/style";
import styled from "styled-components";

export const Filters = styled.div`
  ${StyledText} {
    padding-right: 1rem;
  }
`;
export const Action = styled.div`
  justify-self: end;

  ${StyledText} {
    padding-right: 1rem;
  }
`;

const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

export default StyledFilter;
