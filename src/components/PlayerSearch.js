import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPlayer, getAverage } from "../actions";

class PlayerSearch extends React.Component {
  // componentWillUpdate() {
  //   this.getPlayer(this.props.match.params.id);
  //   this.getAverage(this.props.match.params.id);
  // }

  render() {
    return (
      <div
        className="ui search"
        style={{ marginTop: "10px", textAlign: "right" }}
      >
        <form onClick={this.props.onSearch}>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder={this.props.placeholder}
            />
            <Link to={`/player/stat/${this.props.search.id}`}>
              <i className="search icon"></i>
            </Link>
          </div>
          <div className={this.props.players}></div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { search: state.search };
};

export default connect(mapStateToProps, { getPlayer, getAverage })(
  PlayerSearch
);
