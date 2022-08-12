import { Suspense } from "react"
import { RelayEnvironmentProvider } from "react-relay"
import RelayEnv from "../config/RelayEnv"

const App = ({ Component, pageProps }) => (
  <RelayEnvironmentProvider environment={RelayEnv} >
    <Suspense fallback={'Loading...'} >
      <Component {...pageProps} />
    </Suspense>
  </RelayEnvironmentProvider>
)

export default App