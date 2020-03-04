import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
        <div className="ui header">
          {this.props.player.first_name} {this.props.player.last_name} | HT:{" "}
          {this.props.player.height_feet}"{this.props.player.height_inches} |
          WT: {this.props.player.weight_pounds} lbs
        </div>
      );
    }
  };

  // Renders all content into the modal showing as a table
  renderContent = () => {
    if (!this.props.player) {
      return "Loading Stats";
    } else {
      return this.props.average.map(avg => {
        return (
          <table key={avg.player_id} className="ui celled table">
            <thead>
              <tr>
                <th>MIN</th>
                <th>GP</th>
                <th>PTS</th>
                <th>FGM</th>
                <th>FGA</th>
                <th>FG%</th>
                <th>3PM</th>
                <th>3PA</th>
                <th>3P%</th>
                <th>FTM</th>
                <th>FTA</th>
                <th>FT%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="MIN">{avg.min}</td>
                <td data-label="GP">{avg.games_played}</td>
                <td data-label="PTS">{avg.pts}</td>
                <td data-label="FGM">{avg.fgm}</td>
                <td data-label="FGA">{avg.fga}</td>
                <td data-label="FG%">{avg.fg_pct}</td>
                <td data-label="3PM">{avg.fg3m}</td>
                <td data-label="3PA">{avg.fg3a}</td>
                <td data-label="3P%">{avg.fg3_pct}</td>
                <td data-label="FTM">{avg.ftm}</td>
                <td data-label="FTA">{avg.fta}</td>
                <td data-label="FT%">{avg.ft_pct}</td>
              </tr>
            </tbody>
          </table>
        );
      });
    }
  };

  //Close button
  renderActions() {
    return (
      <React.Fragment>
        <Link to="/" className="ui button negative">
          Close
        </Link>
      </React.Fragment>
    );
  }

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
        actions={this.renderActions()}
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
