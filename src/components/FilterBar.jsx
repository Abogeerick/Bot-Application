import React, { useState } from "react";

const FilterBar = ({ onFilter }) => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleClassChange = (botClass) => {
    // Update the selected classes and call the onFilter callback with the updated classes
    const updatedSelectedClasses = selectedClasses.includes(botClass)
      ? selectedClasses.filter((cls) => cls !== botClass)
      : [...selectedClasses, botClass];
    setSelectedClasses(updatedSelectedClasses);
    onFilter(updatedSelectedClasses);
  };

  return (
    <div>
      <h3>Filter by Class:</h3>
      <label>
        <input
          type="checkbox"
          checked={selectedClasses.includes("Support")}
          onChange={() => handleClassChange("Support")}
        />
        Support
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedClasses.includes("Medic")}
          onChange={() => handleClassChange("Medic")}
        />
        Medic
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedClasses.includes("Assault")}
          onChange={() => handleClassChange("Assault")}
        />
        Assault
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedClasses.includes("Defender")}
          onChange={() => handleClassChange("Defender")}
        />
        Defender
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedClasses.includes("Captain")}
          onChange={() => handleClassChange("Captain")}
        />
        Captain
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedClasses.includes("Witch")}
          onChange={() => handleClassChange("Witch")}
        />
        Witch
      </label>
    </div>
  );
};

export default FilterBar;
