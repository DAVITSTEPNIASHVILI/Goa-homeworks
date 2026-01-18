import Comp1 from "./components/Comp1"
import { ErrorBoundary } from "react-error-boundary";
import FallBack from "./components/FallBackUI";


const App = () => {
  <>
    <ErrorBoundary FallbackComponent={FallBack}>
      <Comp1 />
      <Comp1 />
    </ErrorBoundary>
    <ErrorBoundary FallbackComponent={FallBack}>
      <Comp1 />
    </ErrorBoundary>
    <Comp1 />
  </>
}
export default App