import Image from "next/image";
import React from "react";

const Pagination = ({
  totalEntries,
  rowsPerPage,
  currentPage,
  setCurrentPage,
  setRowsPerPage,
}) => {
  const totalPages = Math.ceil(totalEntries / rowsPerPage);

  const handleEntriesChange = (event) => {
    const newrowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newrowsPerPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg rounded-t-none">
      <div className="flex items-center gap-1">
        <label htmlFor="entries" className="text-sm">
          Show
        </label>
        <select
          id="entries"
          value={rowsPerPage}
          onChange={handleEntriesChange}
          className="block p-2 border border-gray-300 rounded-2xl text-sm"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span className="text-sm">entries</span>
      </div>

      <div className="text-sm text-[#5C6A70] font-normal">
        Showing <span>{(currentPage - 1) * rowsPerPage + 1}</span> to{" "}
        <span>{Math.min(currentPage * rowsPerPage, totalEntries)}</span> of{" "}
        <span>{totalEntries}</span> entries
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="p-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        >
        <Image
              className="inline-block rotate-90"
              src="/chevron-down.webp"
              width={16}
              height={16}
              alt="chevron-right image"
            />
        </button>
        <span className="text-sm">{currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="p-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        >
        <Image
              className="inline-block rotate-[270deg]"
              src="/chevron-down.webp"
              width={16}
              height={16}
              alt="chevron-right image"
            />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
