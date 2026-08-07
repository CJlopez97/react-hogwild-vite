import React from "react";

function Filter({ showGreasedOnly, onToggleGreased, sortBy, onSortChange }) {
  return (
    <div className="filterWrapper">
      <div className="ui form">
        <div className="inline field">
          <label htmlFor="greased-filter">Greased Pigs Only?</label>
          <input
            type="checkbox"
            id="greased-filter"
            checked={showGreasedOnly}
            onChange={(e) => onToggleGreased(e.target.checked)}
          />
        </div>

        <div className="inline field">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;