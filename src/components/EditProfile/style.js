import Text from "components/Text";
import styled from "styled-components";

const GroupTitle = styled(Text).attrs({ size: "large" })`
  align-self: end;
`;

const GenderAndRegion = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: space-between;
`;

const SelectGroup = styled.div`
  margin: 0 -4px;

  & > * {
    margin: 0 4px;
  }
`;

const StyledEditProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 30px;
  max-height: 100vh;
  overflow-y: auto;
`;

const StyledIconInput = styled.div`
  display: grid;
  grid-template-columns: 38px 1fr;
  align-items: end;
`;

export default StyledEditProfile;

export { GroupTitle, GenderAndRegion, SelectGroup, StyledIconInput };
