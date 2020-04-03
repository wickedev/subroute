import React from "react";
import { Switch, Link, Route } from "react-router-dom";

function SubNavigation() {
  return (
    <div>
      <Link to="/a">A</Link>
      {" / "}
      <Link to="/b">B</Link>
    </div>
  );
}

function A() {
  return <div style={{ border: "1px solid black", padding: "1rem" }}>A</div>;
}

function B() {
  return <div style={{ border: "1px solid black", padding: "1rem" }}>B</div>;
}

export function Home() {
  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <SubNavigation />
      <div style={{ marginBottom: "1rem" }}>HOME</div>
      <Switch>
        <Route path="/a" component={A} />
        <Route path="/b" component={B} />
      </Switch>
    </div>
  );
}
