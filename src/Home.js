import './Home.css';
import styled from 'styled-components';

function Home() {
  const Button = styled.button`
  display: inline-block;
  color: rgb(59,96,229);
  font-family: 'Didact Gothic', sans-serif;
  text-decoration: none;
  padding: 0.8em 1em;
  border: 2px solid rgb(59,96,229);
  border-radius: 10px;
  height: 23px;
  width: 150px;
`;

  return (
    <div className="Home">
      <div className="Home-body">
        <div className="App-logo">
          <div className="Logo">PSHELPER</div>
          <div className="Logo-sub">2021</div>
        </div>
        {/* <div className="Discription">
          <div className="Discription-title">
            알고리즘 문제풀이를 도와드립니다.
          </div>
          <div className="Discription-sub">
            ACM-ICPC, 대기업 코딩테스트, 프로그래밍 대회와 같은 많은 곳에서 알고리즘 문제풀이 ( PS )가 행해지고 있습니다.<br/>
            PSHELPER와 함께 문제를 분석하고, 풀이 방법을 공부해보세요.
          </div>
        </div> */}
        <Button as="a" href="/comingsoon">지금 시작하기  ▶</Button>
      </div>
    </div>
  );
}

export default Home;
