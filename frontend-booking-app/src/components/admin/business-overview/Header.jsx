import DateFilterDropdown from "./DateFilterDropdown";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Dashboard</h1>
        <p className="text-gray-500">
          Welcome back! Here's the latest on your activity.
        </p>
      </div>
      <DateFilterDropdown />
    </div>
  );
};

export default Header;