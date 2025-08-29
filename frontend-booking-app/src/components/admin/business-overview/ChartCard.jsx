// src/components/admin/business-overview/ChartCard.jsx

const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-dark-red mb-4">{title}</h3>
      <div className="h-72 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;