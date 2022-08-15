import { graphql } from "react-relay"
import { useLazyLoadQuery } from "react-relay";
import SearchResult from "./SearchResult";

const Query = graphql`
  query SearchQuery($keyword: String!) {
    ...SearchResultFragment @arguments(keyword: $keyword)
  }
`;

const Search = ({ keyword }) => {
  const fragmentRefs = useLazyLoadQuery(Query, { keyword });
  return <SearchResult query={fragmentRefs} />;
};

export default Search;
