import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import PlayerStats from "./PlayerStats";
import "../styles/index.css";
import history from "../history";
import SearchedPlayer from "./SearchedPlayer";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={PlayerCard} />
          <Route path="/player/stat/:id" exact component={PlayerStats} />
          <Route path="/player/search/:id" exact component={SearchedPlayer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
