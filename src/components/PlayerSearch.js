import React from "react";
import { connect } from "react-redux";
import { getPlayer, getAverage, getPlayers } from "../actions";

class PlayerSearch extends React.Component {
  onFocus = e => {
    if (e.target.autoComplete) {
      e.target.autoComplete = "whatever";
    }
  };

  render() {
    return (
      <div
        className="ui search"
        style={{ marginTop: "10px", textAlign: "right" }}
      >
        <form
          onFocus={this.onFocus}
          onSubmit={this.props.onSubmit}
          onChange={this.props.onSearch}
        >
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder={this.props.placeholder}
              autoComplete="off"
            />
            <i className="search icon"></i>
          </div>
          <div className={this.props.search}></div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { search: state.search, average: state.average };
};

export default connect(mapStateToProps, { getPlayer, getAverage, getPlayers })(
  PlayerSearch
);
