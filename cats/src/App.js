import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingCat from "./components/greetingCat";
import RandomCat from "./components/randomCat";
import "./App.css";

const defaultHistory = createBrowserHistory();

export default function App({history = defaultHistory}) {
  return(
    <Router histroy={history}>
      <Route exact path="/" component={RandomCat}/>
      <Route exact path="/cat/:greeting" component={GreetingCat}/>
    </Router>
  )
}
