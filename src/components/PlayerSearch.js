import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPlayer, getAverage } from "../actions";

class PlayerSearch extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="ui search"
        style={{ marginTop: "10px", textAlign: "right" }}
      >
        <form onChange={this.props.onSearch}>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder={this.props.placeholder}
            />
            <Link to={`/player/stat/${this.props.search}`}>
              <i onSubmit={this.props.onSearch} className="search icon"></i>
            </Link>
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

export default connect(mapStateToProps, { getPlayer, getAverage })(
  PlayerSearch
);
