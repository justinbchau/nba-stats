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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;
  justify-items: center;
`;

const Title = styled.h1`
  font-size: 3.5em;
  color: white;
  text-shadow: 2px 2px black;
  align-self: end;
`;

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
      <Grid classname="ui container">
        <Title>NBA Players Stats</Title>
        <PlayerSearch
          placeholder="Search for a player"
          onSearch={this.onSearch}
          onSubmit={this.onSubmit}
        />
      </Grid>
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
