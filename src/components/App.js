import styled from "@emotion/styled";
import Header from "./Header";

const StickyTop = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;
`;

const App = ({ Component, pageProps }) => (
  <>
    <StickyTop>
      <Header />
    </StickyTop>
    <Component {...pageProps} />
  </>
)

export default App