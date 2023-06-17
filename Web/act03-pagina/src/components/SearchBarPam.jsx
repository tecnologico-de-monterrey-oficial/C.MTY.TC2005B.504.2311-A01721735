import React from "react";
import PropTypes from "prop-types";
import "./SearchBarPam.css";

const SearchBarPam = ({ value, onChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Búsqueda de PAMs"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SearchBarPam.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBarPam;
