"use client";

import React from "react";
import Header from "../components/Header";
import TableWithPagination from "../components/TableWithPagination";
import CustomBadge from "../components/CustomBadge";
import FilterSection from "../components/FilterSection";
import useCandidateStore from "@/store/store";
import CustomDialogBtn from "../components/CustomDialogBtn";

const Candidates = () => {
  const { candidates, filteredCandidates, AllFiltersObject } = useCandidateStore();
  const displayCandidates =
    filteredCandidates.length > 0  ? filteredCandidates : candidates;

  return (
    <div className="bg-[#E6EDF1] w-screen">
      <div className="bg-[#E6EDF1] flex flex-col gap-6 p-4 md:grid md:grid-cols-[186px_auto] md:grid-rows-[40px_1fr] max-w-[1280px] m-auto h-auto md:pt-10 md:p-8  md:gap-10">
        <Header />
        <FilterSection />
        <section className="w-full overflow-x-auto">
          <div className="flex w-full gap-8 mb-8">
            <div className="w-full bg-white rounded-sm p-2 flex flex-wrap gap-2">
              {Object.keys(AllFiltersObject).map((filterType) => {
                if (AllFiltersObject[filterType].length > 0){
                  let arrayStr = AllFiltersObject[filterType].join(', ')
                  return <CustomBadge key={filterType} filterType = {filterType} label={`${filterType}: ${arrayStr}`}/>;
                }
              })}
            </div>
            <CustomDialogBtn />
          </div>
          <TableWithPagination candidates={displayCandidates} />
        </section>
      </div>
    </div>
  );
};
export default Candidates;
