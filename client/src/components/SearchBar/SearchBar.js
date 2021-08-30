import { getValueFormatter } from "@nivo/core";
import { useState } from "react";
import React from "react";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((val) => {
      return val.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  return (
    <div className="search">
      <div className="search__inputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className="search__icon"></div>
      </div>
      {filteredData.length != 0 && (
        <div className="search__results">
          {filteredData.map((val, key) => {
            return (
              <div className="search__data-item">
                <p>{val.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
