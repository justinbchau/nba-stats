import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPlayer, getAverage, getPlayerStat } from "../actions";
import { connect } from "react-redux";

import PlayerList from "./PlayerList";

class SearchedPlayer extends Component {
  componentDidMount() {
    this.props.getPlayerStat(this.props.match.params.id);
    this.props.getAverage(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <PlayerList />
      </div>
    );
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
