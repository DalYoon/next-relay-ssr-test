import styled from "@emotion/styled";
import { Suspense } from "react";
import Search from "./templates/Search";

const Page = styled.div`
  color: #fff;
`;

const Main = styled.div`
  width: 100%;
  padding: 16px 32px;
`;

const Container = ({ query }) => {
  const keyword = query.keyword || null

  switch (keyword) {
    case null:
    case "":
      return <h3>Please input some keyword</h3>;
    default:
      return (
        <Suspense fallback={<h3>Getting Result...</h3>}>
          <Search keyword={keyword} />
        </Suspense>
      )
  }
};

const SearchPage = ({ query }) => (
  <Page>
    <Main>
      <Suspense fallback={<h3>Getting Result...</h3>}>
        <Container query={query} />
      </Suspense>
    </Main>
  </Page>
);

export default SearchPage;
