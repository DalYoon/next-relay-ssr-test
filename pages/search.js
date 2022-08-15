import { Suspense } from "react";
import Search from "../src/pages/search";

export const getServerSideProps = (ctx) => {
  return {
    props: {
      query: ctx.query
    },
  }
}

const Page = (props) => {
  return (
    <Suspense fallback={<h3>되냐?</h3>} >
      <Search {...props} />
    </Suspense>
  )
}

export default Page