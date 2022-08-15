import styled from "@emotion/styled";
import { graphql } from "react-relay"
import { usePaginationFragment } from "react-relay";
import ListItem from "./ListItem";

const Fragment = graphql`
  fragment SearchResultFragment on Query
  @argumentDefinitions(
    keyword: { type: "String!" }
    cursor: { type: "String", defaultValue: null }
    count: { type: "Int", defaultValue: 5 }
  )
  @refetchable(queryName: "SearchResultPaginationQuery") {
    search(after: $cursor, first: $count, query: $keyword, type: REPOSITORY)
      @connection(key: "SearchResultFragment_search") {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            ...ListItemFragment
          }
        }
      }
    }
  }
`;

const Container = styled.div`
  color: #c9d1d9;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 16px;
  border-bottom: 2px solid #30363d;
`;

const SearchResult = ({ query }) => {
  const { data, loadNext, hasNext } = usePaginationFragment(Fragment, query);
  const {
    search: { edges, repositoryCount },
  } = data;

  const onClickLoadMore = () => {
    if (hasNext) loadNext(5);
  };

  return (
    <Container>
      <Title>{`Showing ${repositoryCount.toLocaleString()} available repository results`}</Title>
      <ul>
        {!!edges && edges.map(
          (edge) =>
            !!edge?.node && <ListItem key={edge?.node?.id} query={edge?.node} />
        )}
      </ul>
      <button onClick={onClickLoadMore}>Load More</button>
    </Container>
  );
};

export default SearchResult;
