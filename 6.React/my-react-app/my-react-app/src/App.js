import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

function App() {
  let name = "sesac";

  let style = {
    h2: {
      color: "red",
    },
    mytext: {
      color: "green",
    },
  };

  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h1>hello, react {name}</h1>
      </header>
      <h2 style={style.h2}>헤더2</h2>
      <p style={style.mytext}>본문내용</p>
      <MyFooter />
    </div>
  );
}

export default App;
