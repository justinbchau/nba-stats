import React from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changePage } from "../actions/index";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Pagination = ({ pages, changePage }) => {
  if (!pages) {
    return <Loader />;
  }

  if (pages.total_pages === 1) {
    return null;
  }

  if (pages.current_page < pages.total_pages && pages.current_page === 1) {
    return (
      <div>
        <button
          onClick={() => changePage(pages.current_page + 1)}
          className="ui right labeled icon button"
        >
          Page {pages.current_page + 1}
          <i className="right chevron icon"></i>
        </button>
      </div>
    );
  } else if (pages.current_page < pages.total_pages) {
    return (
      <Div>
        <button
          onClick={() => changePage(pages.current_page - 1)}
          className="ui labeled icon button"
        >
          <i className="left chevron icon"></i>
          Page {pages.current_page - 1}
        </button>
        <br />
        <button
          onClick={() => changePage(pages.current_page + 1)}
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
          onClick={() => changePage(pages.current_page - 1)}
          className="ui labeled icon button"
        >
          <i className="left chevron icon"></i>
          Page {pages.current_page - 1}
        </button>
      </Div>
    );
  }
};

export default connect(null, { changePage })(Pagination);
