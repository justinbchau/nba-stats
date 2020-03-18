import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import {
  getPlayers,
  getPlayer,
  getStats,
  getAverage,
  getPlayerStat,
  getPage,
  getSearchedStats
} from "../actions";

import PlayerSearch from "./PlayerSearch";
import PlayerList from "./PlayerList";
import history from "../history";

// Styled Components
const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: white;
  text-shadow: 2px 2px black;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const Fade = styled.div`
  animation: ${fadeIn} 1s ease-in;
`;

// PlayerCard Component
class PlayerCard extends React.Component {
  state = {
    player: ""
  };

  componentDidMount() {
    this.props.getStats();
    this.props.getPlayers();
  }

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
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.getPlayer(this.state.player);
  };

  render() {
    if (!this.props.stats) {
      return (
        <div className="ui container">
          <p></p>
          <div className="ui active dimmer">
            <div className="ui loader"></div>
          </div>
        </div>
      );
    }

    const { search } = this.props;

    return (
      <Fade>
        <div>
          <PlayerSearch
            placeholder="Search for a player"
            onSearch={this.onSearch}
            onSubmit={this.onSubmit}
          />

          <Title>NBA Players Stats</Title>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "30px 15px"
            }}
          >
            <PlayerList stats={search} showStats={this.showStats} />
          </div>
        </div>
      </Fade>
    );
  }
}

const mapStatetoProps = state => {
  return {
    players: Object.values(state.players),
    stats: state.stats,
    average: state.average,
    search: state.search,
    pages: state.stats.meta
  };
};

export default connect(mapStatetoProps, {
  getPlayers,
  getPlayer,
  getStats,
  getAverage,
  getPlayerStat,
  getPage,
  getSearchedStats
})(PlayerCard);
