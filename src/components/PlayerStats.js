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

  // renderTitle = () => {
  //   return this.props.stats.avg.map(stat => {
  //     return <div>{stat.first_name}</div>;
  //   });
  // };

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
      <Modal title={this.props.stats} onDismiss={() => history.push("/")} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    average: state.average,
    stats: state.stats
  };
};

export default connect(mapStateToProps, {
  getAverage,
  getStats,
  getPlayerStat
})(PlayerStats);
