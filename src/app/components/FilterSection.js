"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import useCandidateStore from "@/store/store";
import FilterDropdown from "./FilterDropdown";
import {
  cityData,
  companyData,
  countryData,
  industryData,
  jobPositionData,
  pincodeData,
  salaryData,
  stateData,
  tagData,
} from "../utils/data";
import { ScrollArea } from "@/components/ui/scroll-area";

const FilterSection = () => {
  const {
    AllFiltersObject,
    applyFilters,
    resetFilters,
    setSelectedCity,
    setSelectedState,
    setSelectedPincode,
    setSelectedCountry,
    setSelectedSalary,
    setSelectedCompany,
    setSelectedJobPosition,
    setSelectedIndustry,
    setSelectedTag,
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
            selectedOptions={AllFiltersObject.ContactName}
            placeholder="Select ContactName..."
            onChange={setSelectedContactName}

          /> */}
          <FilterDropdown
            name="Pin Code"
            options={pincodeData}
            selectedOptions={AllFiltersObject.Pincode}
            placeholder="Select pincode..."
            onChange={setSelectedPincode}
          />
          <FilterDropdown
            name="City"
            options={cityData}
            placeholder="Select city..."
            selectedOptions={AllFiltersObject.City}
            onChange={setSelectedCity}
          />
          <FilterDropdown
            name="State"
            options={stateData}
            placeholder="Select state..."
            selectedOptions={AllFiltersObject.State}
            onChange={setSelectedState}
          />
          <FilterDropdown
            name="Country"
            options={countryData}
            selectedOptions={AllFiltersObject.Country}
            placeholder="Select country..."
            onChange={setSelectedCountry}
          />
          <FilterDropdown
            name="Salary"
            options={salaryData}
            selectedOptions={AllFiltersObject.Salary}
            placeholder="Select salary range..."
            onChange={setSelectedSalary}
          />
          <FilterDropdown
            name="Company Name"
            options={companyData}
            selectedOptions={AllFiltersObject.Company}
            placeholder="Select company..."
            onChange={setSelectedCompany}
          />
          <FilterDropdown
            name="Job Position"
            options={jobPositionData}
            selectedOptions={AllFiltersObject.JobPosition}
            placeholder="Select job position..."
            onChange={setSelectedJobPosition}
          />
          <FilterDropdown
            name="Industry"
            options={industryData}
            selectedOptions={AllFiltersObject.Industry}
            placeholder="Select industry..."
            onChange={setSelectedIndustry}
          />
          <FilterDropdown
            name="Tags"
            options={tagData}
            selectedOptions={AllFiltersObject.Tag}
            placeholder="Select tags..."
            onChange={setSelectedTag}
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
