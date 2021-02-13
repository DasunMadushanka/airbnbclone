import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Router path="/search">
            <SearchPage />
          </Router>
          <Router path="/">
            <Home />
          </Router>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
