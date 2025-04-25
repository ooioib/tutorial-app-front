import "./Landing.css";

function Landing({ setViewName }) {
  function clickHandle(evt) {
    setViewName(evt.target.dataset.view);
  }

  return (
    <div className="container">
      <div className="landing">
        <h1 className="title">미니게임</h1>
        <p className="desc">게임을 선택하세요!</p>
        <button
          className="start-btn"
          onClick={clickHandle}
          data-view="TypingTest"
        >
          타이핑속도
        </button>
        <button
          className="start-btn"
          onClick={clickHandle}
          data-view="RpsBattle"
        >
          가위바위보
        </button>
      </div>
    </div>
  );
}

export default Landing;
