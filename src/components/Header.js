import styled from "@emotion/styled";
import { useRouter } from "next/router";
// import Icon from "components/atoms/Icon";
import SearchInput from "./SearchInput";

const NavBar = styled.nav`
  width: 100%;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  background-color: #161b22;
  color: #fff;
`;

// const GithubIcon = styled(Icon)`
//   width: 32px;
//   height: 32px;
//   margin-right: 16px;
// `;


const Header = () => {
  const { query: { keyword = null } } = useRouter()
  // const keyword = useQueryParams("keyword");

  return (
    <NavBar>
      {/* <a href="/">
        <GithubIcon type={"github"} />
      </a> */}
      <SearchInput key={keyword} initKeyword={keyword} />
    </NavBar>
  );
}

export default Header
