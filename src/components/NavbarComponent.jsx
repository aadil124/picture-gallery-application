import React, { useState } from "react";

const NavbarComponent = ({ inputValue, setInputValue, handleSearch }) => {
  return (
    <nav className="navbar bg-success-subtle bg-body-light p-4">
      <div className="container-fluid">
        <a
          href="/"
          className="navbar-brand text-danger text-uppercase fw-bold mb-3"
        >
          Picture Gallery Application
        </a>
        <form className="d-flex" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search 'food' here..."
            aria-label="Search"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button className="btn btn-danger" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavbarComponent;
