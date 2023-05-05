import { useId } from "react";

function App() {
  const id = useId();
  const id1 = useId();
  return (
    <>
        <h1>{id}</h1>
        <h1>{id + 'First'}</h1>
        <h1>{id1}</h1>
    </>
  );
}

export default App;
