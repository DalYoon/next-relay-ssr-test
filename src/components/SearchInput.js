import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

const Input = styled.input`
  width: 272px;
  height: 30px;
  border: 1px solid #30363d;
  font-size: 12px;
  background-color: #0d1117;
  color: #fff;
  padding: 0px 12px;
  border-radius: 8px;
  :focus {
    outline: none;
  }
`;

const SearchInput = ({ initKeyword }) => {
  const { push } = useRouter()

  const [keyword, setKeyword] = useState(initKeyword || "");
  const changeKeyword = ({ currentTarget: { value } }) => setKeyword(value);

  const submit = (e) => {
    e.preventDefault();

    try {
      if (keyword === "") throw Error("Empty Keyword")

      push({
        pathname: "/search",
        query: { keyword }
      })
    } catch (err) {
      console.log("search err: ", err)
      return undefined
    }
  };

  return (
    <form onSubmit={submit}>
      <Input value={keyword} onChange={changeKeyword} />
    </form>
  );
}

export default SearchInput
