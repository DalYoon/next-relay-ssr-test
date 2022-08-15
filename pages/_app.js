import "../src/config/GlobalStyles"
import { Suspense } from "react"
import { RelayEnvironmentProvider } from "react-relay"
import RelayEnv from "../src/config/RelayEnv"
import App from "../src/components/App";

const Root = (props) => (
  <RelayEnvironmentProvider environment={RelayEnv} >
    <Suspense fallback={'Loading...'} >
      <App {...props} />
    </Suspense>
  </RelayEnvironmentProvider>
)

export default Root