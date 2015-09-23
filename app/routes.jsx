import { Router, Route, IndexRoute } from "react-router";
import React from "react";

import Application from "./components/Application";
import Airing from "./components/Airing";
import Archive from "./components/Archive";

export default (
  <Router>
    <Route path="/" component={ Application }>
      <IndexRoute component={ Airing } />
      <Route path="archive" component={ Archive } />
    </Route>
  </Router>
);
