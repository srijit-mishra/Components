import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

function DropdownPage() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={handleSelect}
      />
    </div>
  );
}

export default DropdownPage;
