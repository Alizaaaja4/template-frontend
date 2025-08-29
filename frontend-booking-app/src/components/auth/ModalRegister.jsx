const ModalRegister = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      
      {/* Konten Modal */}
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
        
        {/* Header Modal */}
        <h2 className="text-2xl underline font-bold text-dark-red mb-2">Register</h2>
        
        {/* Isi Pesan */}
        <p className="text-gray-700 mb-6">
          Don't have an account? <br />
          All staff are welcome to contact the admin for account registration.
        </p>
        
        {/* Tombol Close */}
        <div className="flex justify-end">
          <button
            onClick={onClose} 
            className="w-[120px] text-sm bg-gradient-to-r from-gradasi-dark-red-1 to-gradasi-light-red-1 text-white font-medium py-2 px-4 rounded-3xl shadow-md hover:from-gradasi-light-red-1 hover:to-gradasi-dark-red-1 transition duration-300"
          >
            Close
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ModalRegister;