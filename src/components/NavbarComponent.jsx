import React from "react";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Picture Gallery Application
        </a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-info" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavbarComponent;
