import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Theme from "./theme";
import { ROUTE_PATHS } from "lib/navigation";
import Home from "pages/Home";

const App = () => (
  <Theme>
    <Switch>
      <Route path={ROUTE_PATHS.HOME} component={Home} />
    </Switch>
  </Theme>
);

export default withRouter(App);
