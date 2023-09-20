import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import EntriesPage from "./EntriesPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/entries">Entries</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/entries" component={EntriesPage} />
      </div>
    </Router>
  );
};

export default App;
