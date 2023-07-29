// components/SortBar.js
import React from "react";
import SortOptions from "./SortOptions"; // Import the SortOptions component

const SortBar = ({ onSort }) => {
  return (
    <div>
      <h2>Sort Bots</h2>
      <SortOptions onSort={onSort} /> {/* Use the SortOptions component for sorting */}
    </div>
  );
};

export default SortBar;
