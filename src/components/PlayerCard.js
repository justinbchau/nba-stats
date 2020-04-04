import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import {
  getPlayers,
  getPlayer,
  getStats,
  getAverage,
  getPlayerStat,
  getPage,
  getSearchedStats,
  getTeams,
  getTeam,
  filterPlayersByTeam
} from "../actions";

import { Link, Redirect } from "react-router-dom";

import PlayerSearch from "./PlayerSearch";
import PlayerList from "./PlayerList";
// import history from "../history";
import TeamSelect from "./TeamSelect";
import SelectedTeam from "./SelectedTeam";
import Loader from "./Loader";
import TeamPicker from "./TeamPicker";
import Pagination from "./Pagination";

// Styled Components
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: white;
  text-shadow: 2px 2px black;
  margin-bottom: 3rem;
`;

const SearchWrapper = styled.div`
  display: grid;
  grid-template-rows: 5rem;
  grid-row: 1 / -1;
  justify-content: end;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px 10px;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 4rem;
`;
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const Fade = styled.div`
  animation: ${fadeIn} 1s ease-in;
`;

// PlayerCard Component
class PlayerCard extends React.Component {
  state = {
    player: "",
    teamId: null
  };

  //onClick will update the state with the targeted player with their playerId
  showStats = stat => {
    this.props.getAverage(stat);
    this.props.getPlayerStat(stat);
  };

  //Returns the Player based off given name in the input
  //Returns a Promise with an Object holding the targeted player's stats
  onSearch = e => {
    e.preventDefault();
    this.setState({
      player: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.getPlayer(this.state.player);
  };

  setSelectedTeam = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
    const selectedId = e.target.value;
    this.props.getTeam(selectedId);
    this.props.filterPlayersByTeam(selectedId);
  };

  render() {
    if (!this.props.search) {
      return <Redirect to="/" />;
    }

    const { search, teams } = this.props;

    return (
      <>
        <Fade>
          <div>
            <SearchWrapper>
              <PlayerSearch
                placeholder="Search for a player"
                onSearch={this.onSearch}
                onSubmit={this.onSubmit}
              />
            </SearchWrapper>
            {/* <TeamSelect teams={teams} setSelectedTeam={this.setSelectedTeam} /> */}
            {/*  */}
            {/* <SelectedTeam /> */}
            {/* <TeamPicker /> */}

            <Title>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                NBA Players Stats
              </Link>
            </Title>
            <Grid
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: "30px 15px"
              }}
            >
              <PlayerList players={search.players} showStats={this.showStats} />
              <Footer>
                <Pagination pages={search.pages} player={search.players} />
              </Footer>
            </Grid>
          </div>
        </Fade>
      </>
    );
  }
}

const mapStatetoProps = (state, ownProps) => {
  return {
    players: Object.values(state.players),
    stats: state.stats,
    average: state.average,
    search: state.search,
    teams: state.teams,
    selectedTeam: state.selectedTeam
  };
};

export default connect(mapStatetoProps, {
  getPlayers,
  getPlayer,
  getStats,
  getAverage,
  getPlayerStat,
  getPage,
  getSearchedStats,
  getTeams,
  getTeam,
  filterPlayersByTeam
})(PlayerCard);
