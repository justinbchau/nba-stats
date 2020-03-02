import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import Modal from "./Modal";
import history from "../history";
import { getAverage, getStats, getPlayerStat } from "../actions";

class PlayerStats extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getAverage(this.props.match.params.id);
    this.props.getPlayerStat(this.props.match.params.id);
  }

  // Potentially think about using the componentDidUnmount lifecycle method to help destroy the piece of state as we click on more players
  renderTitle = () => {
    if (!this.props.player) {
      return "...Loading";
    } else {
      return (
        <div>
          {this.props.player.first_name} {this.props.player.last_name} |{" "}
          {this.props.player.position}
        </div>
      );
    }
  };

  renderContent = () => {
    if (!this.props.player) {
      return "Loading Stats";
    } else {
      return this.props.average.map(avg => {
        return (
          <div key={avg.player_id}>
            <span>MIN: {avg.min} </span> | <span>GP: {avg.games_played}</span> |{" "}
            <span>PTS: {avg.pts}</span> | <span>FGM: {avg.fgm}</span> |{" "}
            <span>FGA: {avg.fga}</span> | <span>FG%: {avg.fg_pct}</span> |{" "}
            <span> 3PM: {avg.fg3m}</span> | <span>3PA: {avg.fg3a}</span> |{" "}
            <span>3P%: {avg.fg3_pct}</span> | <span>FTM: {avg.ftm}</span> |{" "}
            <span>FTA: {avg.fta}</span> | <span>FT%: {avg.ft_pct}</span>
          </div>
        );
      });
    }
  };

  render() {
    if (!this.props.average) {
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
      <Modal
        title={this.renderTitle()}
        onDismiss={() => history.push("/")}
        content={this.renderContent()}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    average: state.average,
    stats: state.stats,
    player: state.players[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {
  getAverage,
  getStats,
  getPlayerStat
})(PlayerStats);
