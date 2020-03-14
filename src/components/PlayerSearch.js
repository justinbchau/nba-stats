import React from "react";
import { connect } from "react-redux";
import { getPlayer, getAverage, getPlayers } from "../actions";

class PlayerSearch extends React.Component {
  render() {
    return (
      <div
        className="ui search"
        style={{ marginTop: "10px", textAlign: "right" }}
      >
        <form onSubmit={this.props.onSubmit} onChange={this.props.onSearch}>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              id="player"
              placeholder={this.props.placeholder}
            />
            <i className="search icon"></i>
          </div>
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
