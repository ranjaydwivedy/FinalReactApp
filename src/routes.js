import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import { User } from "./pages/User/User";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

const Routes = (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" exact component={Users} />
      <Route path="/users/:userId" component={User} />
      <Route component={PageNotFound} />
    </Switch>
  </>
);

export { Routes };
