import { useState } from "react";
import Header from "../../components/admin/ticketing/Header";
import TableControls from "../../components/admin/transaction/TableControls";
import TransactionTable from "../../components/admin/transaction/TransactionsTable";
import Pagination from "../../components/admin/transaction/Pagination";

const TicketingPage = () => {
  // --- State dan fungsi untuk pagination ---
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    console.log(`Mengambil data untuk halaman: ${page}`);
    setCurrentPage(page);
  };

  return (
    <div className="p-1 md:p-4">
      <Header />

      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <TableControls />
      </div>

      {/* Kirim fungsi handle ke tabel */}
      <TransactionTable />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TicketingPage;
