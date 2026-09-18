import React, { useState } from "react";
import Select from "react-select";
import Label from "./Label";

const AdvancedSelect = ({
  options,
  label,
  isLableReq,
  required,
  onMenuOpen,
  className,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
    console.log(`Option selected:`, option);
  };

  return (
    <div className="w-full">
      <Label isLableReq={isLableReq} label={label} required={required} />

      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "#1e293b", // slate-800
            border: "1px solid #334155", // slate-700
            borderRadius: "12px",
            minHeight: "42px",
          }),
          singleValue: (base) => ({
            ...base,
            color: "#fff",
          }),
          input: (base) => ({
            ...base,
            color: "#fff",
          }),
          placeholder: (base) => ({
            ...base,
            color: "#94a3b8",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "#1e293b",
            border: "1px solid #334155",
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected
              ? "#A50034"
              : state.isFocused
                ? "#334155"
                : "#1e293b",
            color: "#fff",
          }),
        }}
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
