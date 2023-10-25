import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdownn({ options, selected, onSelectedChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (e) => {
    onSelectedChange(e);
    setIsOpen(false);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!divRef.current) return;

      if (!divRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divRef} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {selected?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdownn;
