import styled from "@emotion/styled";
import { graphql } from "react-relay"
import { useFragment, useMutation } from "react-relay";
import { useState } from "react";
import { compactNumber } from "utils/parsers"
import FilledStar from "components/FilledStar";
import EmptyStar from "components/EmptyStar";

const Fragment = graphql`
  fragment StarButtonFragment on Repository {
    id
    stargazerCount
    viewerHasStarred
  }
`;

const AddMutation = graphql`
  mutation StarButtonAddMutation($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;

const RemoveMutation = graphql`
  mutation StarButtonRemoveMutation($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;

const Container = styled.div`
  color: ${({ isHovered }) => (isHovered ? "#58a6ff" : "#8b9493")};
  display: flex;
  align-items: center;
  height: 14px;
  cursor: pointer;
`;

const StarButton = ({ query }) => {
  const fragmentRefs = useFragment(Fragment, query);
  const { id, stargazerCount, viewerHasStarred } = fragmentRefs;

  const [isHovered, setIsHovered] = useState(false);

  const [addStar, isAddingStar] =
    useMutation(AddMutation);

  const [removeStar, isRemovingStar] =
    useMutation(RemoveMutation);

  const onClickButton = () => {
    if (isAddingStar || isRemovingStar) return
    else
      viewerHasStarred
        ? removeStar({ variables: { repositoryId: id } })
        : addStar({ variables: { repositoryId: id } });
  };

  return (
    <Container
      onClick={onClickButton}
      isHovered={isHovered}
      onMouseEnter={() => !isHovered && setIsHovered(true)}
      onMouseLeave={() => isHovered && setIsHovered(false)}
    >
      {viewerHasStarred ? (
        <FilledStar
          style={{ fill: isHovered ? "#58a6ff" : "#8b9493", marginRight: 4 }}
        />
      ) : (
        <EmptyStar
          style={{ fill: isHovered ? "#58a6ff" : "#8b9493", marginRight: 4 }}
        />
      )}
      {compactNumber(stargazerCount)}
    </Container>
  );
};

export default StarButton;
