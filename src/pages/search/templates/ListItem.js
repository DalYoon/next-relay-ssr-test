import styled from "@emotion/styled";
import { graphql } from "react-relay"
import { useFragment } from "react-relay";
import PrimaryLanguage from "./PrimaryLanguage";
import StarButton from "./StarButton";

const Fragment = graphql`
  fragment ListItemFragment on Repository {
    nameWithOwner
    description
    url
    ...StarButtonFragment
    ...PrimaryLanguageFragment
  }
`;

const Li = styled.li`
  width: 100%;
  padding: 24px 8px;
  border-bottom: 1px solid #30363d;
`;

const LinkBox = styled.div`
  margin-bottom: 8px;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #58a6ff;
  margin-bottom: 12px;
`;

const Desc = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Footer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #8b9493;
`;

const ListItem = ({ query }) => {
  const fragmentRefs = useFragment(Fragment, query);
  const { nameWithOwner, description, url } = fragmentRefs;

  return (
    <Li>
      <LinkBox>
        <Link href={url} target={"_blank"}>
          {nameWithOwner}
        </Link>
      </LinkBox>
      <Desc>{description}</Desc>
      <Footer>
        <StarButton query={fragmentRefs} />
        <PrimaryLanguage query={fragmentRefs} />
      </Footer>
    </Li>
  );
}

export default ListItem

