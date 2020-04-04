import React from "react";
import { withRouter } from "react-router-dom";

class PlayerSearch extends React.Component {
  render() {
    return (
      <div className="ui fluid search" style={{ margin: "auto" }}>
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

export default withRouter(PlayerSearch);
