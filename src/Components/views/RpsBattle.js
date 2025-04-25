import { useState } from "react";
import "./RpsBattle.css";

function RpsBattle() {
  const [ready, setReady] = useState(false);
  const [aiChoice, setAiChoice] = useState("❓");
  const [timerId, setTimerId] = useState(null);
  const [result, setResult] = useState();

  const startHandle = function (e) {
    setReady(true);
    const id = setInterval(function () {
      setAiChoice(function (currVal) {
        if (currVal == "✊") {
          return "✋";
        } else if (currVal == "✋") {
          return "✌️";
        } else {
          return "✊";
        }
      });
    }, 70);

    setTimerId(id);
  };

  const choiceHandle = function (e) {
    clearInterval(timerId);
  };

  return (
    <div className="rps-game">
      <div className="computer-choice">
        <h2>컴퓨터의 선택</h2>
        <div className="choice-display" id="computer-choice">
          {aiChoice}
        </div>
      </div>
      <div className="user-choice">
        <h2>당신의 선택은?</h2>
        <div className="buttons">
          {ready ? (
            <>
              <button className="btn" data-choice="rock" onClick={choiceHandle}>
                ✊ 바위
              </button>
              <button
                className="btn"
                data-choice="paper"
                onClick={choiceHandle}
              >
                ✋ 보
              </button>
              <button
                className="btn"
                data-choice="scissors"
                onClick={choiceHandle}
              >
                ✌️ 가위
              </button>
            </>
          ) : (
            <>
              <button className="btn" onClick={startHandle}>
                배틀시작
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RpsBattle;
