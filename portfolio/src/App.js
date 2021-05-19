import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/nav/Nav";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
      </Wrapper>

    </div>
    </Router>
  );
}

export default App;
