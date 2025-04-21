import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  maxVisiblePages: number;
}

const ReusablePagination = ({ currentPage, setCurrentPage, totalPages, maxVisiblePages }: PaginationProps) => {
  const createPagination = () => {
    const pageNumbers = [];

    let start = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let end = Math.min(start + maxVisiblePages - 1, totalPages);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(end - maxVisiblePages + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="flex flex-col gap-y-1 justify-center items-center">
      <div className="flex items-center justify-center space-x-2 py-4">
        <button
          className={`text-[#929292] duration-300 cursor-pointer ${currentPage === 1 ? "" : "hover:text-black"}`}
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {currentPage > 3 && <span>...</span>}

        {createPagination().map((page) => (
          <button
            key={page}
            className={`px-4 border py-3 rounded-md font-semibold ${currentPage === page ? "bg-white border-[#16584D]" : ""}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages && totalPages > maxVisiblePages && <span>...</span>}

        <button
          className={`text-[#929292] duration-300 cursor-pointer flex items-center ${currentPage === totalPages ? "" : "hover:text-black"}`}
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* <div className="text-center text-[#929292] text-[14px] -mt-5">
        Showing {currentPage} of {totalPages} pages
      </div> */}
    </div>
  );
};

export default ReusablePagination;
