import React from "react";
import "./searchBox.css";
const SearchBox = ({ searchChange }) => {
  return (
    <>
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="SEARCH FRIENDS"
          onChange={searchChange}
        />
      </div>
    </>
  );
};

export default SearchBox;
