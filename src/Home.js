import './Home.css';
import styled from 'styled-components';

function Home() {
  const InputField1 = styled.input`
    height: 40vh;
    width: 50vw;
    margin: 15px 0 15px 0;
    color: white;
    border: 3px solid #1cc4bb;
    border-radius: 3px;
    background-color: rgb(50,50,50);
    padding: 10px;
  `;

  const InputField2 = styled.input`
    height: 20vh;
    width: 50vw;
    margin: 15px 0 0 0;
    color: white;
    border: 3px solid #1cc4bb;
    border-radius: 3px;
    background-color: rgb(50,50,50);
    padding: 10px;
  `;

  const Button = styled.button`
  display: inline-block;
  color: #1cc4bb;
  background-color: rgb(30,35,40);
  font-size: 1em;
  text-decoration: none;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid #1cc4bb;
  border-radius: 3px;
  display: block;
`;

  return (
    <div className="Home">
      <div className="Home-body">
        <div className="App-logo">
          <img className="Logo-img" src="pshelper-logo.png" alt="logo" />
        </div>
        <InputField1
          type="text"
        />
        <InputField2
          type="text"
        />
        <Button as="a" href="/algorithm">Submit</Button>
      </div>
    </div>
  );
}

export default Home;
