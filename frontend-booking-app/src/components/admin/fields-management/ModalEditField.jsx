import { useState, useEffect } from "react";

const ModalEditField = ({ isOpen, onClose, management_lap }) => {
  const [formData, setFormData] = useState({
    no_lapang: '',
    jenis: '',
    harga: '',
  });

  useEffect(() => {
    if (management_lap) {
      setFormData({
        no_lapang: management_lap.no_lapang || "",
        jenis: management_lap.jenis || "",
        harga: management_lap.harga || "",
      });
    }
  }, [management_lap]);
  const handleInputChange = (e) => {
    const { no_lapang, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [no_lapang]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data lapangan baru:", formData);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-dark-red underline mb-6">
          Edit Field
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4">
            {/* Kolom 1 */}
            <div>
              <label
                htmlFor="no_lapang"
                className="block text-sm font-medium text-gray-700"
              >
                ID Lapangan
              </label>
              <input
                type="text"
                name="no_lapang"
                id="no_lapang"
                placeholder="LP01"
                value={formData.no_lapang}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-red focus:border-dark-red"
                required
              />
            </div>

            {/* Kolom 2 */}
            <div>
              <label
                htmlFor="Jenis"
                className="block text-sm font-medium text-gray-700"
              >
                Jenis
              </label>
              <input
                type="text"
                name="Jenis"
                id="Jenis"
                placeholder='Rumput Sintetis'
                value={formData.jenis}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-red focus:border-dark-red"
                required
              />
            </div>

            {/* Kolom 3 */}
            <div>
              <label
                htmlFor="harga"
                className="block text-sm font-medium text-gray-700"
              >
                Harga/ Jam
              </label>
              <input
                type="number"
                name="harga"
                id="harga"
                placeholder="Rp. 150,000,00"
                value={formData.harga}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-red focus:border-dark-red"
                required
              />
            </div>
          </div>

          {/* Tombol Aksi (Submit dan Cancel) */}
          <div className="flex justify-end space-x-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-hijau-semi-dark text-white rounded-lg"
            >
              Save Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditField;
