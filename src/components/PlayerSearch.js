import React from "react";
import { connect } from "react-redux";
import { getPlayer } from "../actions";

const PlayerSearch = ({ placeholder, onSearch, onSubmit, players }) => {
  console.log(players);
  return (
    <form onSubmit={onSubmit}>
      <div
        style={{
          marginTop: "10px",
          display: "grid",
          gridTemplateColumns: "spacing 1fr spacing",
          marginLeft: "40px",
          marginRight: "40px"
        }}
        className="ui input focus"
      >
        <input
          type="text"
          name="search"
          placeholder={placeholder}
          onSubmit={onSearch}
        />
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return { players: Object.values(state.players) };
};

export default connect(mapStateToProps, { getPlayer })(PlayerSearch);
