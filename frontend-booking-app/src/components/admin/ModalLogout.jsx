const ModalLogout = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm relative">
        <h2 className="text-xl font-bold underline text-dark-red mb-4">Logout</h2>
        <p className="text-gray-700 mb-8">
          Are you sure you want to Log out?
        </p>
        
        {/* Container */}
        <div className="flex justify-end space-x-4">
          {/* Tombol "No" */}
          <button
            onClick={onClose} 
            className="w-[100px] text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-3xl transition duration-300"
          >
            Cancel
          </button>

          {/* Tombol "Yes" */}
          <button
            onClick={onConfirm} 
            className="w-[100px] text-sm bg-dark-red text-white font-medium py-2 px-4 rounded-3xl shadow-md transition duration-300 hover:bg-red-600"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;