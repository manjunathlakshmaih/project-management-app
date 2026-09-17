import React, { useState } from "react";
import Select from "react-select";

const AdvancedSelect = ({options}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
    console.log(`Option selected:`, option);
  };

  return (
    <div style={{ padding: "20px", width: "300px" }}>
      <label style={{ display: "block", marginBottom: "8px" }}>
        Select a flavor (Searchable by default):
      </label>

      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Search or select..."
        isClearable // Allows user to clear selection with an 'x'
      />

      {selectedOption && (
        <p>
          Your selection: <strong>{selectedOption.label}</strong>
        </p>
      )}
    </div>
  );
};

export default AdvancedSelect;
