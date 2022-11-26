import StyledText from "components/Text/style";
import styled, { css } from "styled-components";

const StyledParagraph = styled(StyledText)`
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

export default StyledParagraph;
