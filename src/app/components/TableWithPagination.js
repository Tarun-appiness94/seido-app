import React, { useState } from "react";
import CustomTable from "./CustomTable";
import Pagination from "./Pagination";

const TableWithPagination = ({ candidates }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalEntries = candidates.length; 
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = candidates.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <>
      <div className="overflow-hidden rounded-t-lg w-full">
        <CustomTable candidates={currentRows} />
      </div>
      <Pagination
        totalEntries={totalEntries}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setRowsPerPage={setRowsPerPage}
      />
    </>
  );
};

export default TableWithPagination;
