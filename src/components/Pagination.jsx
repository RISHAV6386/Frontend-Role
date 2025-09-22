import React from 'react'

// Pagination component
// Props:
// - totalPages: total number of pages
// - cardPerPage: (not directly used here, but usually helps calculate totalPages)
// - setCurrentPage: function to update the current page in parent component
// - currentPage: the current active page number
const Pagination = ({ totalPages, cardPerPage, setCurrentPage, currentPage }) => {
 // Debugging: log total number of pages

  // Function to handle page changes (prev/next/page number)
  const handlePageChange = (page) => {
    // Only change page if it's within the valid range
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-6 mb-6">
      
      {/* Previous button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)} // go to previous page
        disabled={currentPage === 1} // disable on first page
        className="px-3 py-1 rounded-lg bg-gray-100 text-3xl text-black h-15 w-20 hover:bg-gray-300 disabled:opacity-50"
      >
        &lt; {/* Left arrow */}
      </button>

      {/* Page number buttons */}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1; // Pages start at 1
        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)} // set clicked page as current
            className={`px-3 py-1 rounded-lg text-2xl h-15 w-20 ${
              currentPage === page
                ? "bg-blue-500 text-white font-medium" // highlight current page
                : "bg-gray-100 text-black hover:bg-gray-300" // normal style
            }`}
          >
            {page} {/* Show page number */}
          </button>
        );
      })}

      {/* Next button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)} // go to next page
        disabled={currentPage === totalPages} // disable on last page
        className="px-3 py-1 rounded-lg bg-gray-100 h-15 w-20 text-black text-3xl hover:bg-gray-300 disabled:opacity-50"
      >
        &gt; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Pagination;
