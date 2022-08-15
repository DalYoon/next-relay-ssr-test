import styled from "@emotion/styled"

const Page = styled.div`
  color: #fff;
`;

const Main = styled.div`
  width: 100%;
  padding: 16px 32px;
`;

const Home = () => (
  <Page>
    <Main>
      <h1>Repository Searcher with Relay JS</h1>
    </Main>
  </Page>
);

export default Home
