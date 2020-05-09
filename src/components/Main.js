import React, { Component } from "react";
import PlayerSearch from "./PlayerSearch";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getPlayer,
  getTeam,
  filterPlayersByTeam,
  getPlayers
} from "../actions";
import history from "../history";
import { Redirect } from "react-router-dom";

class Main extends Component {
  state = {
    player: "",
    teamId: null
  };

  componentDidMount() {
    this.props.getPlayers();
  }

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

    if (this.props.search.length <= 0) {
      return <Redirect to="/" />;
    }
    history.push(`/search/${this.state.player}`);
  };

  render() {
    return (
      <div classname="search">
        <h1 style={
          {marginBottom: "1em"}
        }>NBA Players Stats</h1>
        <PlayerSearch
          placeholder="Enter player name ..." //Better UX
          onSearch={this.onSearch}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps, {
  getPlayer,
  getTeam,
  filterPlayersByTeam,
  getPlayers
})(Main);
