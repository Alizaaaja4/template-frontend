import StatusBadge from "./StatusBadge"; 

const dummyData = [
  { id: 1, no_invoice: "0000001", name: "Ade Aditya", no_lapangan: "LP01", datebook: "31/01/2025", status_pembayaran: "Success"},
  { id: 2, no_invoice: "0000002", name: "Ade Aditya", no_lapangan: "LP02", datebook: "31/01/2025", status_pembayaran: "Success" },
  { id: 3, no_invoice: "0000003", name: "Budi Satya", no_lapangan: "LP02", datebook: "31/01/2025", status_pembayaran: "Success" },
  { id: 4, no_invoice: "0000004", name: "Budi Satya", no_lapangan: "LP01", datebook: "31/01/2025", status_pembayaran: "Pending" },
  { id: 5, no_invoice: "0000005", name: "Budi Satya", no_lapangan: "LP05", datebook: "31/01/2025", status_pembayaran: "Failed" }, 
];

const TransactionTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">No. Invoice</th>
            <th scope="col" className="px-6 py-3">Pelanggan</th>
            <th scope="col" className="px-6 py-3">ID Lapangan</th>
            <th scope="col" className="px-6 py-3 text-center">Tanggal Main</th>
            <th scope="col" className="px-6 py-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((transaction, index) => (
            <tr key={transaction.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-2">{index + 1}</td>
              <td className="px-6 py-2">{transaction.no_invoice}</td>
              <td className="px-6 py-2 font-medium text-gray-900">{transaction.name}</td>
              <td className="px-6 py-2">{transaction.no_lapangan}</td>
              <td className="px-6 py-2 text-center">{transaction.datebook}</td>
              <td className="px-6 py-2 text-center">
                <StatusBadge status={transaction.status_pembayaran} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;