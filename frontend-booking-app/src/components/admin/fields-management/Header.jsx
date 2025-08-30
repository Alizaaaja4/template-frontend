const Header = ({ onAddFieldClick }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Fields Management</h1>
        <p className="text-gray-500">
          List of fields configured on the system.
        </p>
      </div>
      
      <button
        onClick={onAddFieldClick}
        className="bg-hijau-semi-dark hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
        Add Field
      </button>
    </div>
  );
};

export default Header;