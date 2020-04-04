import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import Main from "./Main";
import PlayerStats from "./PlayerStats";
import "../styles/index.css";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/search/:playerName" exact component={PlayerCard} />
          <Route path="/player/stat/:id" exact component={PlayerStats} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
