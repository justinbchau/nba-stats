import React from "react";
import { connect } from "react-redux";
import { getPlayers, getPlayer, getStats } from "../actions";

import PlayerSearch from "./PlayerSearch";

class PlayerCard extends React.Component {
  componentDidMount() {
    // this.props.getPlayers();
    // this.props.getStats(Math.floor(Math.random() * 100));
    this.props.getStats();
  }

  //Loops through Players Object and lists out players and their stats into a card
  renderStats = () => {
    return this.props.stats.map(stat => {
      return (
        <div key={stat.player.id}>
          <div className="ui link raised card">
            <div className="content">
                    <div className="header">
                        {stat.player.first_name} {stat.player.last_name} - {stat.player.position}
                    </div>
                    <div className="ui inverted divider"></div>
                    <div className="description">
                        Team: {stat.team.full_name} | {stat.team.abbreviation}
                    </div>
                </div>
                    <div className="ui bottom attached button">
                        Stats
                    </div>
          </div>
        </div>
      );
    });
  }


  //Returns the Player based off given name in the input
  //Returns a Promise with an Object holding the targeted player's stats
   onSearch = e => {
      e.preventDefault();
      let playerName = e.target.value;
      console.log(playerName);
  };

  render() {
    if (!this.props.stats) {
      return (
        <div class="ui container">
          <p></p>
          <div class="ui active dimmer">
            <div class="ui loader"></div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <PlayerSearch
          placeholder="Search for a player"
          onSearch={this.onSearch}
        />

        <h2>Players</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridColumnGap: '30px' }}>{this.renderStats()}</div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    players: Object.values(state.players),
    stats: state.stats
  };
};

export default connect(mapStatetoProps, { getPlayers, getPlayer, getStats })(
  PlayerCard
);
