import { useState } from "react";

import Landing from "./Components/views/Landing";
import TypingTest from "./Components/views/TypingTest";
import TypingResult from "./Components/views/TypingResult";

function App() {
  const [viewName, setViewName] = useState("Landing");
  const [typingScore, setTypingScore] = useState(null);

  return (
    <>
      {viewName === "Landing" && <Landing setViewName={setViewName} />}
      {viewName === "TypingTest" && (
        <TypingTest setViewName={setViewName} setTypingScore={setTypingScore} />
      )}
      {viewName === "TypingResult" && (
        <TypingResult setViewName={setViewName} typingScore={typingScore} />
      )}
    </>
  );
}

export default App;
