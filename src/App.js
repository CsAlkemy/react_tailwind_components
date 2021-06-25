import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/layout";
import Home from "./pages/index";
import Components from "./pages/components";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <div>
        <Layout />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/component" component={Components} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
