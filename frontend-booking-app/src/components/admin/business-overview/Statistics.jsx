import StatCard from "./StatCard";

import userW from "../../../assets/user-w.png";
import transactionW from "../../../assets/card-w.png"; 
import fieldW from "../../../assets/data-w.png"; 
import activeW from "../../../assets/active-w.png";
import customer from "../../../assets/customer.png";

const statsData = [
  { title: "Total Transactions", value: "Rp. 2,000,000", icon: transactionW, iconBgColor: "bg-ungu" },
  { title: "Total Staff", value: "24", icon: userW, iconBgColor: "bg-biru" },
  { title: "Total Customers", value: "24", icon: customer, iconBgColor: "bg-orange" },
  { title: "Total Fields", value: "03", icon: fieldW, iconBgColor: "bg-hijau" },
  { title: "Total Active Fields", value: "12", icon: activeW, iconBgColor: "bg-kuning" },
];

const Statistics = () => {
  return (
    <div className="space-y-6">
      <StatCard
        title={statsData[0].title}
        value={statsData[0].value}
        icon={statsData[0].icon}
        iconBgColor={statsData[0].iconBgColor}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {statsData.slice(1).map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconBgColor={stat.iconBgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Statistics;