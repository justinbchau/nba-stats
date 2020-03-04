import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPlayers,
  getPlayer,
  getStats,
  getAverage,
  getPlayerStat
} from "../actions";

import PlayerSearch from "./PlayerSearch";

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

class PlayerCard extends React.Component {
  componentDidMount() {
    this.props.getStats();

    this.props.getPlayers();
  }

  //Loops through Stats Object and lists out players and their stats into a card
  renderStats = () => {
    return this.props.stats.map(stat => {
      return (
        <div key={stat.player.id}>
          <div className="ui link raised card">
            <div className="content">
              <div className="header">
                {stat.player.first_name} {stat.player.last_name} |{" "}
                {stat.player.position}
              </div>
              <div className="ui inverted divider"></div>
              <div className="description">
                Team: {stat.team.full_name} | {stat.team.abbreviation}
              </div>
            </div>
            <Link to={`/player/stat/${stat.player.id}`}>
              <div
                className="ui bottom attached button"
                onClick={() => this.showStats(stat.player.id)}
              >
                Stats
              </div>
            </Link>
          </div>
        </div>
      );
    });
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
    let playerName = e.target.value;
    this.props.getPlayer(playerName);
    this.onSubmit(playerName);
  };

  onSubmit = player => {
    console.log(player);
  };

  render() {
    console.log(this.props.search);
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
    return (
      <Fade>
        <div>
          <PlayerSearch
            placeholder="Search for a player"
            onSearch={this.onSearch}
            onSubmit={this.onSubmit}
            players={this.props.search}
          />

          <Title>NBA Players Stats</Title>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "30px 15px"
            }}
          >
            {this.renderStats()}
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
    search: state.search
  };
};

export default connect(mapStatetoProps, {
  getPlayers,
  getPlayer,
  getStats,
  getAverage,
  getPlayerStat
})(PlayerCard);
