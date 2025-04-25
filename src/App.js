// 상태 관리를 위한 useState 훅 불러오기
import { useState } from "react";

// 각 화면에 해당하는 컴포넌트 불러오기
import Landing from "./Components/views/Landing";
import TypingTest from "./Components/views/TypingTest";
import TypingResult from "./Components/views/TypingResult";
import RpsBattle from "./Components/views/RpsBattle";

function App() {
  // 현재 보여줄 화면을 저장 (초기값 Landing)
  const [viewName, setViewName] = useState("Landing");

  // 타이핑 점수를 저장할 상태
  const [typingScore, setTypingScore] = useState(null);
  return (
    <>
      {/* 조건에 따라 해당 컴포넌트를 렌더링 */}
      {viewName === "Landing" && <Landing setViewName={setViewName} />}
      {viewName === "RpsBattle" && <RpsBattle setViewName={setViewName} />}
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
