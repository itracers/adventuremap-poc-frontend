import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./view/SignIn";
import { SignUp } from "./view/SignUp";
import { Main } from "./view/Main";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route from="/signin" exact>
          <SignIn />
        </Route>
        <Route from="/signup" exact>
          <SignUp />
        </Route>
        <Route from="/" exact>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
