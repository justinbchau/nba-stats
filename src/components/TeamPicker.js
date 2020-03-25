import React from "react";
import Select from "react-select";
import { connect } from "react-redux";

const TeamPicker = props => {
  return <Select options={options} />;
};

const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

const options = [
  { value: 1, label: "Boston Celtics" },
  { value: 2, label: "Boston Celtics" },
  { value: 3, label: "Boston Celtics" },
  { value: 4, label: "Boston Celtics" },
  { value: 5, label: "Boston Celtics" },
  { value: 6, label: "Boston Celtics" },
  { value: 7, label: "Boston Celtics" },
  { value: 8, label: "Boston Celtics" }
];

export default connect(mapStateToProps)(TeamPicker);
