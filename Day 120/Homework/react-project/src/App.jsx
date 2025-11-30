import Hello from "./components/Hello";
import HelloButton from "./components/HelloButton";

const App = () => {
  const handleClick = () => {
    alert("Hello Button");
  };

  return (
    <>
      <Hello name="Alice" />
      <HelloButton handleClick={handleClick} />
    </>
  );
};

export default App;