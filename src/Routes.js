import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import NotFound from "./containers/NotFound";
import Home from "./containers/Home";
import Europe from "./components/Europe";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/Europe" exact component={Europe} props={childProps} />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
