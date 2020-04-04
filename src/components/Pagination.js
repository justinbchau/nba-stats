import React from "react";
import Loader from "./Loader";
import { connect } from "react-redux";
import { changePage } from "../actions/index";
import styled from "styled-components";
import store from "../store/index";

const Div = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
`;

const Pagination = ({ pages, changePage }) => {
  const state = store.getState();

  const { playerName } = state.search;
  if (!pages) {
    return <Loader />;
  }

  if (pages.total_pages === 1) {
    return null;
  }

  if (pages.current_page < pages.total_pages && pages.current_page === 1) {
    return (
      <Div>
        <button
          onClick={() => changePage(playerName, pages.current_page + 1)}
          className="ui right labeled icon button"
        >
          Page {pages.current_page + 1}
          <i className="right chevron icon"></i>
        </button>
      </Div>
    );
  } else if (pages.current_page < pages.total_pages) {
    return (
      <Div>
        <button
          onClick={() => changePage(playerName, pages.current_page - 1)}
          className="ui labeled icon button"
        >
          <i className="left chevron icon"></i>
          Page {pages.current_page - 1}
        </button>
        <br />
        <button
          onClick={() => changePage(playerName, pages.current_page + 1)}
          className="ui right labeled icon button"
        >
          Page {pages.current_page + 1}
          <i className="right chevron icon"></i>
        </button>
      </Div>
    );
  } else {
    return (
      <Div>
        <button
          onClick={() => changePage(playerName, pages.current_page - 1)}
          className="ui labeled icon button"
        >
          <i className="left chevron icon"></i>
          Page {pages.current_page - 1}
        </button>
      </Div>
    );
  }
};

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps, { changePage })(Pagination);
