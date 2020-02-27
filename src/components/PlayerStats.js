import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import Modal from "./Modal";
import history from "../history";
import { getAverage, getStats, getPlayer } from "../actions";

class PlayerStats extends React.Component {
  componentDidMount() {
    console.log(this.props.match);
    this.props.getAverage(this.props.match.params.id);
    this.props.getPlayer(this.props.match.params.id);
  }

  renderTitle() {
    return this.props.players.map(player => player.first_name);
  }

  render() {
    return (
      <Modal title={this.renderTitle()} onDismiss={() => history.push("/")} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    average: Object.values(state.average[ownProps.match.params.id]),
    stats: state.stats[ownProps.match.params.id],
    players: state.players[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { getAverage, getStats, getPlayer })(
  PlayerStats
);
