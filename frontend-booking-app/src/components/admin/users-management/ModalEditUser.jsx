import { useState, useEffect } from "react";

const ModalEditUser = ({ isOpen, onClose, user }) => {
  const [formData, setFormData] = useState({
    nama: "",
    handphone: "",
    username: "",
    pass: "",
    role_id: "2",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nama: user.nama || "",
        handphone: user.phone || "",
        username: user.username || "",
        pass: "", // Password biasanya tidak diisi ulang untuk keamanan
        role_id: user.role_id || "2",
      });
    }
  }, [user]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data user baru:", formData);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-dark-red underline mb-6">
          Edit User
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Kolom 1 */}
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                placeholder="Krisna Surya"
                value={formData.nama}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-red focus:border-dark-red"
                required
              />
            </div>

            {/* Kolom 2 */}
            <div>
              <label
                htmlFor="handphone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="handphone"
                id="handphone"
                placeholder="0987653421"
                value={formData.handphone}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-red focus:border-dark-red"
                required
              />
            </div>

            {/* Kolom 1 */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="krisna123"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-red focus:border-dark-red"
                required
              />
            </div>

            {/* Kolom 2 */}
            <div>
              <label
                htmlFor="pass"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="*****"
                value={formData.pass}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-red focus:border-dark-red"
                required
              />
            </div>

            {/* Baris ini mengambil lebar 2 kolom */}
            <div className="md:col-span-2">
              <label
                htmlFor="role_id"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select
                name="role_id"
                id="role_id"
                value={formData.role_id}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-dark-red focus:border-dark-red"
              >
                <option value="1">Super Admin</option>
                <option value="2">Staff</option>
              </select>
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
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditUser;
