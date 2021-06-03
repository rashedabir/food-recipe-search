import React from "react";

function Header({ setSearch, onClickSubmit }) {
  return (
    <div className="jumbotron p-4">
      <h2 className="display-1">
        <i className="fas fa-hamburger"></i> food search recipe
      </h2>
      <div className="form-box">
        <form
          onSubmit={(e) => {
            onClickSubmit(e.preventDefault());
          }}
        >
          <div className="mt-3 pb-5 d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search Food Recipe"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button type="submit" className="btn btn-dark">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Header;
