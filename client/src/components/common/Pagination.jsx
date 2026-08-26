import React from "react";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  itemName = "members",
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startItem =
    totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;

  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between items-center px-2 mt-2">
      {/* Showing text */}
      <div className="text-base text-slate-400">
        Showing {startItem} to {endItem} of {totalItems} {itemName}
      </div>

      {/* Pagination buttons */}
      <div className="flex gap-2">

        {/* Previous */}
        <button
          className="pb-1 px-3 bg-slate-800 rounded-lg cursor-pointer text-xl"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              className={`bg-slate-800 px-3 rounded-lg cursor-pointer hover:bg-blue-700 focus:bg-blue-700 ${
                currentPage === page ? "active" : "bg-blue-800"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          className="pb-1 px-3 w-10 h-10 bg-slate-800 rounded-lg cursor-pointer text-xl"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;