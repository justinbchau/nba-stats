import React from "react";
import { connect } from "react-redux";

const SelectedTeam = props => {
  const { teamName, id } = props.selectedTeam;

  console.log(id);

  return <div className="ui label">{teamName}</div>;
};

const mapStateToProps = state => {
  return {
    selectedTeam: state.selectedTeam
  };
};

export default connect(mapStateToProps)(SelectedTeam);
