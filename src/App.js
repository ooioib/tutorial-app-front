import { useState } from "react";

import Landing from "./Components/views/Landing";
import TypingTest from "./Components/views/TypingTest";
import TypingResult from "./Components/views/TypingResult";

function App() {
  const [viewName, setViewName] = useState("Landing");

  return (
    <>
      {viewName === "Landing" && <Landing setViewName={setViewName} />}
      {viewName === "TypingTest" && <TypingTest setViewName={setViewName} />}
      {viewName === "TypingResult" && (
        <TypingResult setViewName={setViewName} />
      )}
    </>
  );
}

export default App;
