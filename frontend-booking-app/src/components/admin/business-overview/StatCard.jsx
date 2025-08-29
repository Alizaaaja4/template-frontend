const StatCard = ({ title, value, icon, iconBgColor }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-dark-red">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
      <div className={`p-3 rounded-lg flex items-center justify-center ${iconBgColor}`}>
        <img src={icon} alt={title} className="h-6 w-6" />
      </div>
    </div>
  );
};

export default StatCard;