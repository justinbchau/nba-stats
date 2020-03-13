import React, { Component } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { getPlayer, getAverage, getPlayerStat } from "../actions";
import { connect } from "react-redux";

class SearchedPlayer extends Component {
  componentDidMount() {
    this.props.getPlayerStat(this.props.match.params.id);
    this.props.getAverage(this.props.match.params.id);
  }

  //Dont know if I am going to keep this page or not
  //Will most likely remove since we dont need it
  renderContent = () => {
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

  render() {
    console.log(this.props);
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    search: state.search,
    average: state.average,
    stats: state.stats
  };
};

export default connect(mapStateToProps, {
  getPlayer,
  getAverage,
  getPlayerStat
})(SearchedPlayer);
