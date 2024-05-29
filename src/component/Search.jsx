import React from "react";

const Search = () => {
  return (
    <div className="conrainer-xxl">
      {/* <input type="search" /> */}
      <form className="form-inline d-flex gap-2">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
