import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Help from "./Help";
import NotFound from "./NotFound";

const Router = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/help" component={Help} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );
// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );
export default Router;
