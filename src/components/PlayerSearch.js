import React from "react";

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

export default PlayerSearch;
