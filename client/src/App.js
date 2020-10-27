import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}


export default App;
