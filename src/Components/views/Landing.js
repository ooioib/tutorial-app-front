import { click } from "@testing-library/user-event/dist/click";
import "./Landing.css";

function Landing({ setViewName }) {
  function clickHandle(evt) {
    setViewName("TypingTest");
  }

  return (
    <div className="container">
      <div className="landing">
        <h1 className="title">타이핑 속도 측정기</h1>
        <p className="desc">당신의 타이핑 속도를 확인해보세요!</p>
        <button className="start-btn" onClick={clickHandle}>
          시작하기
        </button>
      </div>
    </div>
  );
}

export default Landing;
