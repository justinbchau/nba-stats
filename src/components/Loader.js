import React from "react";

const Loader = () => {
  return (
    <div className="ui container">
      <p></p>
      <div className="ui active dimmer">
        <div className="ui loader"></div>
      </div>
    </div>
  );
};

export default Loader;
