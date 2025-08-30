import SatusCard from "./StatusCard";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Ticketing </h1>
        <p className="text-gray-500">
          Monitor the status of incoming tickets in real-time.
        </p>
      </div>
      
      <SatusCard/>
    </div>
  );
};

export default Header;