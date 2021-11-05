import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Update from "./pages/Update.jsx";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/update" component={Update} />
      </Switch>
    </Router>
  );
}
