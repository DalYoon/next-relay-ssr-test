import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Suspense } from "react";
import Search from "./templates/Search";

const Page = styled.div`
  color: #fff;
`;

const Main = styled.div`
  width: 100%;
  padding: 16px 32px;
`;

const Container = () => {
  const { query: { keyword = null } } = useRouter()
  switch (keyword) {
    case null:
    case "":
      return <h3>Please input some keyword</h3>;
    default:
      return <Search keyword={keyword} />;
  }
};

const SearchPage = () => (
  <Page>
    <Main>
      <Suspense fallback={<h3>Getting Result...</h3>}>
        <Container />
      </Suspense>
    </Main>
  </Page>
);

export default SearchPage;
