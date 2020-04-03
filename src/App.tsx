import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";

function Navigation() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Link to="/">HOME</Link>
      {" / "}
      <Link to="/about">ABOUT</Link>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
