import "./App.css";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  const number = 5;
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    num: number,
  };
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1>안녕, 리액트</h1>
          <Counter {...counterProps} />
          {/* 부모 컴포넌트 >>> 자식 컴포넌트에게 정보 전달(props) */}
        </Container>
        <Container>
          <h1>안녕, 리액트</h1>
          <Counter {...counterProps} />
          {/* 부모 컴포넌트 >>> 자식 컴포넌트에게 정보 전달(props) */}
        </Container>
        <Container>
          <h1>안녕, 리액트</h1>
          <Counter {...counterProps} />
          {/* 부모 컴포넌트 >>> 자식 컴포넌트에게 정보 전달(props) */}
        </Container>
      </header>
    </div>
  );
}

export default App;
