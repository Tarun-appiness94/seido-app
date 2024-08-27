"use client"
import { Button } from "@/components/ui/button";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const SearchableComboBox = ({
  name,
  options,
  placeholder,
  onSelectionChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const ref = useRef(); // Ref to access the component DOM

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOption = (option) => {
    const updatedSelections = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedSelections);
    onSelectionChange(name, updatedSelections);
  };

  return (
    <div ref={ref} className="relative w-full max-w-sm" onClick={toggleDropdown}>
      <Button className={isOpen ? "flex items-center justify-between border-2 border-[#E6EDF1] text-[#08445C] bg-white w-full hover:bg-white" : "bg-[#E6EDF1] text-[#08445C] text-sm flex justify-between w-full  hover:bg-[#E6EDF1]"}>
        City
        <Image
              className="inline-block"
              src="/chevron-down.webp"
              width={16}
              height={16}
              alt="chevron-right image"
            />
      </Button>
      {isOpen && (
        <div> 
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full cursor-pointer"
          />
          <div className="mt-2 max-h-40 overflow-y-auto border border-gray-300 bg-white rounded shadow-lg z-10">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option}
                  className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectOption(option)}
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleSelectOption(option)}
                    className="mr-2"
                  />
                  <span>{option}</span>
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">No options found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableComboBox;
