import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ searchQuery, onChange, placeholder }) => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <header>
      {/* use a form to create semantic structure for html */}
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder={placeholder}
          id="search"
          value={searchQuery}
          onChange={onChange}
        />
        <button className="search__button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
