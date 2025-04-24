import "./TypingResult.css";

function TypingResult({ setViewName }) {
  function retryButtonHandle(evt) {
    setViewName("TypingTest");
  }
  return (
    <div class="result-page">
      <h2 class="result-title">🏁 타이핑 결과</h2>

      <div class="user-ranking-highlight">
        <p>
          👏 당신의 순위는 <span class="user-rank">3위</span>입니다!
        </p>
        <p class="user-stats">
          ⏱ 37초 &nbsp;|&nbsp; 💨 65 WPM &nbsp;|&nbsp; 🎯 정확도 98%
        </p>
      </div>

      <h3 class="ranking-title">📊 전체 순위</h3>
      <ol class="ranking-list">
        <li>
          <span class="rank">1위</span> - 72 WPM - 정확도 100%
        </li>
        <li>
          <span class="rank">2위</span> - 67 WPM - 정확도 99%
        </li>
        <li class="highlight">
          <span class="rank">3위 (나)</span> - 65 WPM - 정확도 98%
        </li>
        <li>
          <span class="rank">4위</span> - 62 WPM - 정확도 97%
        </li>
        <li>
          <span class="rank">5위</span> - 60 WPM - 정확도 95%
        </li>
      </ol>

      <button class="retry-btn" onClick={retryButtonHandle}>
        다시하기
      </button>
    </div>
  );
}

export default TypingResult;
