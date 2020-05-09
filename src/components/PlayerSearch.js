import React, { Component }from "react";
import { withRouter } from "react-router-dom";
import '../styles/PlayerSearch.css'

class PlayerSearch extends Component {
  render() {
    return (
        <form onSubmit={this.props.onSubmit} onChange={this.props.onSearch}>
            <input
              className="prompt"
              type="text"
              id="player"
              placeholder={this.props.placeholder}
              pattern='^[\w ]+'
              required
            />
        </form>
    );
  }
}

export default withRouter(PlayerSearch);