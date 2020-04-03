import React from "react";
import { Switch, Link, Route, useHistory } from "react-router-dom";
import { asyncAction } from "mobx-utils";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

class Store {
  @observable loading: boolean = false;

  @asyncAction *asyncSomething() {
    this.loading = true;
    yield deloy(3_000);
    this.loading = false;
  }
}

const store = new Store();

function deloy(timeout: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

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

export const Home = observer(() => {
  const history = useHistory();

  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <SubNavigation />
      <div
        style={{
          border: "1px solid black",
          padding: "1rem",
          marginTop: "1rem",
          marginBottom: "1rem"
        }}
      >
        <div>{store.loading ? "loading" : "done"}</div>
        <button
          onClick={async () => {
            (await store.asyncSomething()) ?? history.push("/about");
          }}
        >
          Load
        </button>
      </div>
      <div style={{ marginBottom: "1rem" }}>HOME</div>
      <Switch>
        <Route path="/a" component={A} />
        <Route path="/b" component={B} />
      </Switch>
    </div>
  );
});
