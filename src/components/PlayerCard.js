import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPlayers,
  getPlayer,
  getStats,
  getAverage,
  getPlayerStat
} from "../actions";

// import Modal from "./Modal";
import PlayerSearch from "./PlayerSearch";

class PlayerCard extends React.Component {
  componentDidMount() {
    this.props.getStats();

    // this.props.getPlayers();
  }

  //Loops through Stats Object and lists out players and their stats into a card
  renderStats = () => {
    return this.props.stats.map(stat => {
      return (
        <div key={stat.player.id}>
          <div className="ui link raised card">
            <div className="content">
              <div className="header">
                {stat.player.first_name} {stat.player.last_name} -{" "}
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
  };

  onSubmit = e => {
    e.preventDefault();
    let player = this.props.getPlayer(e.target.value);
    console.log("Player: " + player);
  };

  render() {
    console.log(this.props.stats);
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
      <div>
        <PlayerSearch
          placeholder="Search for a player"
          onSearch={this.onSearch}
          onSubmit={this.onSubmit}
        />

        <h2>Players</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridColumnGap: "30px"
          }}
        >
          {this.renderStats()}
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    players: Object.values(state.players),
    stats: state.stats,
    average: state.average
  };
};

export default connect(mapStatetoProps, {
  getPlayers,
  getPlayer,
  getStats,
  getAverage,
  getPlayerStat
})(PlayerCard);
