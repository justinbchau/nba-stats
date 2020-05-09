import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import {
  getPlayers,
  getPlayer,
  getStats,
  getAverage,
  getPlayerStat,
  getPage,
  getSearchedStats,
  getTeams,
  getTeam,
  filterPlayersByTeam
} from "../actions";
import '../styles/playerCard.css';
import { Link, Redirect } from "react-router-dom";

import PlayerSearch from "./PlayerSearch";
import PlayerList from "./PlayerList";
// import history from "../history";
import TeamSelect from "./TeamSelect";
import SelectedTeam from "./SelectedTeam";
import Loader from "./Loader";
import TeamPicker from "./TeamPicker";
import Pagination from "./Pagination";

// PlayerCard Component
class PlayerCard extends Component {
  state = {
    player: "",
    teamId: null
  };

  //onClick will update the state with the targeted player with their playerId
  showStats = stat => {
    this.props.getAverage(stat);
    this.props.getPlayerStat(stat);
  };

  //Returns the Player based off given name in the input
  //Returns a Promise with an Object holding the targeted player's stats
  onSearch = e => {
    e.preventDefault();
    this.setState({
      player: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.getPlayer(this.state.player);
  };

  setSelectedTeam = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
    const selectedId = e.target.value;
    this.props.getTeam(selectedId);
    this.props.filterPlayersByTeam(selectedId);
  };

  render() {
    if (!this.props.search) {
      return <Redirect to="/" />;
    }

    const { search, teams } = this.props;

    return (
        <div className='searchResult'>
          <h2>
            <Link to="/" style={{
              color: "inherit",
              textTransform: "uppercase",
              fontSize: ".5em"
              }}>
              🏠 Go back home
            </Link>
          </h2>
          <div className="searchResultInfo">
            <PlayerList players={search.players} showStats={this.showStats} />
          </div>
            <footer>
              <Pagination pages={search.pages} player={search.players} />
            </footer>
        </div>
    );
  }
}

const mapStatetoProps = (state, ownProps) => {
  return {
    players: Object.values(state.players),
    stats: state.stats,
    average: state.average,
    search: state.search,
    teams: state.teams,
    selectedTeam: state.selectedTeam
  };
};

export default connect(mapStatetoProps, {
  getPlayers,
  getPlayer,
  getStats,
  getAverage,
  getPlayerStat,
  getPage,
  getSearchedStats,
  getTeams,
  getTeam,
  filterPlayersByTeam
})(PlayerCard);
