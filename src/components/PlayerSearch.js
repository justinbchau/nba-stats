import React from "react";
import { connect } from "react-redux";
import { getPlayer } from "../actions";

const PlayerSearch = ({ placeholder, onSearch, onSubmit, players }) => {
  return (
    <div
      className="ui search"
      style={{ marginTop: "10px", textAlign: "right" }}
    >
      <form onChange={onSearch}>
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder={placeholder}
            onChange={onSearch}
          />
          <i className="search icon"></i>
        </div>
        <div className={players}></div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return { search: state.search };
};

export default connect(mapStateToProps, { getPlayer })(PlayerSearch);
