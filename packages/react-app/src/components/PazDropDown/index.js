import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const PazzDropdown = () => {
  const options = [
    {
      value: "TeslaSafe",
      label: "TeslaSafe",
      className: "tesla-safe-dropdown-icon",
    },
    { value: "RICE", label: "RICE", className: "rice-dropdown-icon" },
    { value: "PAZ", label: "PAZ", className: "paz-dropdown-icon" },
    { value: "BNB", label: "BNB", className: "bnb-dropdown-icon" },
    { value: "BUSD", label: "BUSD", className: "busd-dropdown-icon" },
  ];
  const defaultOption = options[0];
  return (
    <div>
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Select an option"
        className="paz-dropdown"
      />
    </div>
  );
};

export default PazzDropdown;
