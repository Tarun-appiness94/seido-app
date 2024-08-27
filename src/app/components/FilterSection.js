"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import useCandidateStore from "@/store/store";
import FilterDropdown from "./FilterDropdown";
import {
  cities,
  companies,
  countries,
  industries,
  jobPositions,
  pincodes,
  salaries,
  states,
  tags,
} from "../utils/data";
import { ScrollArea } from "@/components/ui/scroll-area";

const FilterSection = () => {
  const {
    applyFilters,
    resetFilters,
    selectedCities,
    setSelectedCities,
    selectedStates,
    setSelectedStates,
    selectedPinCode,
    setSelectedPinCode,
    selectedCountry,
    setSelectedCountry,
    selectedSalary,
    setSelectedSalary,
    selectedCompanyName,
    setSelectedCompanyName,
    selectedJobPosition,
    setSelectedJobPosition,
    selectedIndustry,
    setSelectedIndustry,
    selectedTags,
    setSelectedTags,
  } = useCandidateStore();

  const handleApply = () => {
    applyFilters();
  };

  const handleReset = () => {
    resetFilters();
  };
  return (
    <aside className="flex flex-col gap-1 h-full">
      <p className="bg-white p-3 rounded-[6px] rounded-b-none text-[#08445C] text-xl font-bold">
        Filters
      </p>
      <div className="flex flex-col gap-2 bg-white md:h-[calc(100vh_-_170px)]">
      <ScrollArea className=" ">
        <div className="flex flex-col gap-[10px] overflow-y-scroll p-4 md:p-1 ">
          {/* <FilterDropdown
            name="Contact Name"
            options={contactData}
            placeholder="Select contact..."
          /> */}
          <FilterDropdown
            name="Pin Code"
            options={pincodes}
            selectedOptions={selectedPinCode}
            placeholder="Select pincode..."
            onChange={setSelectedPinCode}
          />
          <FilterDropdown
            name="City"
            options={cities}
            placeholder="Select city..."
            selectedOptions={selectedCities}
            onChange={setSelectedCities}
          />
          <FilterDropdown
            name="State"
            options={states}
            placeholder="Select state..."
            selectedOptions={selectedStates}
            onChange={setSelectedStates}
          />
          <FilterDropdown
            name="Country"
            options={countries}
            selectedOptions={selectedCountry}
            placeholder="Select country..."
            onChange={setSelectedCountry}
          />
          <FilterDropdown
            name="Salary"
            options={salaries}
            selectedOptions={selectedSalary}
            placeholder="Select salary range..."
            onChange={setSelectedSalary}
          />
          <FilterDropdown
            name="Company Name"
            options={companies}
            selectedOptions={selectedCompanyName}
            placeholder="Select company..."
            onChange={setSelectedCompanyName}
          />
          <FilterDropdown
            name="Job Position"
            options={jobPositions}
            selectedOptions={selectedJobPosition}
            placeholder="Select job position..."
            onChange={setSelectedJobPosition}
          />
          <FilterDropdown
            name="Industry"
            options={industries}
            selectedOptions={selectedIndustry}
            placeholder="Select industry..."
            onChange={setSelectedIndustry}
          />
          <FilterDropdown
            name="Tags"
            options={tags}
            selectedOptions={selectedTags}
            placeholder="Select tags..."
            onChange={setSelectedTags}
          />
        </div>
      </ScrollArea>
        <div className="flex gap-2 w-full md:justify-between justify-center p-4 pt-0 md:p-1 md:pb-4">
          <Button
            variant="outline"
            className="bg-white border-[#08445C] text-[#08445C] rounded-xl text-xs"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            className="bg-[#08445C] text-white rounded-xl text-xs"
            onClick={handleApply}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default FilterSection;
