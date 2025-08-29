const ModalDelateUser = ({ isOpen, onClose, onConfirm, user }) => { 
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
        <h2 className="text-xl font-bold text-dark-red mb-2">Delete User</h2>
      
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete the user account for <strong>{user?.nama}?</strong>
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose} 
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            No
          </button>
          <button
            onClick={onConfirm} 
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelateUser;