import Comp from "./components/Comp"
import { ErrorBoundary } from "react-error-boundary";
import FallBackUI from "./components/FallBackUI";

const App = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={FallBackUI}>
        <Comp />
      </ErrorBoundary>
    </>
  )
}

export default App
