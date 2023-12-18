import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import MemoApp from './MemoApp';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/memo">Memo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/memo" element={<MemoApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
