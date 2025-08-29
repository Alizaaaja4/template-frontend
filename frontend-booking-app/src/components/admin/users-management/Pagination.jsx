// src/components/admin/users-management/Pagination.jsx

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center mt-6">
      <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        {/* Tombol Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {/* Tombol Nomor Halaman */}
        {pageNumbers.map(number => {
          const isActive = number === currentPage;
          return (
            <button
              key={number}
              onClick={() => onPageChange(number)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium
                ${isActive 
                  ? 'bg-dark-red text-white z-10' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              {number}
            </button>
          );
        })}

        {/* Tombol Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;