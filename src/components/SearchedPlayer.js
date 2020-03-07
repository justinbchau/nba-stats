import React, { Component } from "react";
import Modal from "./Modal";
import { getPlayer, getAverage } from "../actions";
import { connect } from "react-redux";

class SearchedPlayer extends Component {
  componentDidMount() {
    this.props.getPlayer(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    return <Modal />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { search: state.search[ownProps], average: state.average };
};

export default connect(mapStateToProps, { getPlayer, getAverage })(
  SearchedPlayer
);
