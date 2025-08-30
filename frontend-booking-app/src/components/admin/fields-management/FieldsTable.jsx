const dummyData = [
  { id: 1, no_lapang: "LP01", jenis: "Rumput Sintetis", harga: "Rp. 150,000,00",},
  { id: 2, no_lapang: "LP02", jenis: "Rumput Sintetis", harga: "Rp. 350,000,00" },
  { id: 3, no_lapang: "LP03", jenis: "Karpet Terpal", harga: "Rp. 350,000,00" },
  { id: 4, no_lapang: "LP04", jenis: "Karpet Terpal", harga: "Rp. 150,000,00" },
  { id: 5, no_lapang: "LP01", jenis: "Karpet Terpal", harga: "Rp. 550,000,00" },
];

const FieldsTable = ({ onEditFieldClick, onDeleteFieldClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              ID Lapangan
            </th>
            <th scope="col" className="px-6 py-3">
              Jenis
            </th>
            <th scope="col" className="px-6 py-3">
              Harga/ Jam
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((management_lap, index) => (
            <tr key={management_lap.id} className="bg-white border-b">
              <td className="px-6 py-2">{index + 1}</td>
              <td className="px-6 py-2">
                {management_lap.no_lapang}
              </td>
              <td className="px-6 py-2">{management_lap.jenis}</td>
              <td className="px-6 py-2">{management_lap.harga}</td>
              <td className="px-6 py-2 flex justify-center gap-2">
                {/* edit */}
                <button
                  onClick={() => onEditFieldClick(management_lap)}
                  className="p-2 rounded-md bg-kuning text-white hover:bg-yellow-500"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>

                {/* delate */}
                <button
                  onClick={() => onDeleteFieldClick(management_lap)}
                  className="p-2 rounded-md bg-red-bgt text-white hover:bg-red-600"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FieldsTable;
