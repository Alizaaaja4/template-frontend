import { useState } from 'react';
import Pagination from '../business-overview/Pagination';

const TopCustomersCard = () => {
  // Data ini nantinya akan datang dari API
  const topCustomers = [
    { name: 'Ade Aditya', handphone: "08123456789", transactions: 25 },
    { name: 'Felix Corputy', handphone: "08234567890", transactions: 21 },
    { name: 'Abd Idhul Rahim', handphone: "08345678901", transactions: 18 },
    { name: 'Maldi Saesar', handphone: "08456789012", transactions: 15 },
    { name: 'Aliza Nurfitrian', handphone: "08567890123", transactions: 18 },
    { name: 'Naruto Uzumaki', handphone: "08678901234", transactions: 15 },
    { name: 'Senku Lestari', handphone: "08789012345", transactions: 18 },
    { name: 'Dewi Anggraini', handphone: "08890123456", transactions: 15 },
    { name: 'Sakura Haruno', handphone: "08901234567", transactions: 14 },
    { name: 'Levi Ackerman', handphone: "08112345678", transactions: 12 },
  ];

  // --- Logika untuk Pagination ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const totalPages = Math.ceil(topCustomers.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = topCustomers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-dark-red mb-4">Daftar Pelanggan Teratas</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-500 font-medium">
            <tr className="border-b">
              <th className="text-left py-2 px-2">Customer</th>
              <th className="text-left py-2 px-2">Phone Number</th>
              <th className="text-right py-2 px-2">Transactions</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="py-3 px-2 font-medium text-gray-800">{customer.name}</td>
                <td className="py-3 px-2 text-gray-600">{customer.handphone}</td>
                <td className="py-3 px-2 text-right text-gray-600">{customer.transactions}x</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4">
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default TopCustomersCard;