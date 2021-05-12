import './ComingSoon.css';
import styled from 'styled-components';

function ComingSoon() {
  const Button = styled.button`
  display: inline-block;
  color: rgb(219, 71, 103);
  font-family: 'Didact Gothic', sans-serif;
  text-decoration: none;
  padding: 0.8em 1em;
  border: 2px solid rgb(219, 71, 103);
  border-radius: 10px;
  height: 23px;
  width: 150px;
`;

  return (
    <div className="Home">
      <div className="Home-body">
        <div className="App-logo">
          <div className="Logo">준비중입니다.</div>
        </div>
        <Button as="a" href="/">◀ 뒤로 가기</Button>
      </div>
    </div>
  );
}

export default ComingSoon;
