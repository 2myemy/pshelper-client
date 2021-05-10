import './Algorithm.css';
import styled from 'styled-components';

function Algorithm() {

  return (
    <div className="Algorighm">
      <div className="Algorighm-body">
        <div className="Algorithm-analysis">
          <div className="Algorithm-card">
            BFS
          </div>
          <div className="Problem-highlight">
            <strong>0</strong>과 <strong>1</strong>로 이루어진 어떤 <strong>문자열 x</strong>에 대한 이진 변환을 다음과 같이 정의합니다. <strong>x</strong>의 모든 <strong>0</strong>을 제거합니다.<br/>
            <strong>x의 길이를 c</strong>라고 하면, x를 <strong>"c를 2진법으로 표현한 문자열"</strong>로 바꿉니다.
            <strong>0</strong>과 <strong>1</strong>로 이루어진 어떤 <strong>문자열 x</strong>에 대한 이진 변환을 다음과 같이 정의합니다. <strong>x</strong>의 모든 <strong>0</strong>을 제거합니다.<br/>
            <strong>x의 길이를 c</strong>라고 하면, x를 <strong>"c를 2진법으로 표현한 문자열"</strong>로 바꿉니다.
          </div>
          <div className="Problem-description">
            <p>문제 지문</p>
          </div>
          <div className="Problem-details">
            <p>제한 조건</p>
          </div>
        </div>
        
        <div className="Algorithm-recommendation">
          유사 문제
          <div className="Recommendation-card">BAEKJOON 10032번 DFS</div>
          <div className="Recommendation-card">BAEKJOON 10032번 BFS</div>
          <div className="Recommendation-card">BAEKJOON 10032번 DFS</div>
        </div>
      </div>
    </div>
  );
}

export default Algorithm;
