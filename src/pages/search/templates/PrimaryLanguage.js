import styled from "@emotion/styled";
import { graphql } from "react-relay"
import { useFragment } from "react-relay";

const Fragment = graphql`
  fragment PrimaryLanguageFragment on Repository {
    primaryLanguage {
      color
      name
    }
  }
`;

const Container = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  margin-right: 4px;
`;

const PrimaryLanguage = ({ query }) => {
  const { primaryLanguage } = useFragment(Fragment, query);
  const color = primaryLanguage?.color;
  const name = primaryLanguage?.name;

  if (!name || !color) return null;
  else
    return (
      <Container>
        <Dot bgColor={color} />
        {name}
      </Container>
    );
};

export default PrimaryLanguage;
