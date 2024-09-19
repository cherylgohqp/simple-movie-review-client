import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchQuery, onChange, placeholder }) => {
  return (
    <div className={styles["search"]}>
      <input
        className={styles["search-input"]}
        type="text"
        placeholder={placeholder}
        id="search"
        value={searchQuery}
        onChange={onChange}
      />
      <button className={styles["search-button"]}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default SearchBar;
