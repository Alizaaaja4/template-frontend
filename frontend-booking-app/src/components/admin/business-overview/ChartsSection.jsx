import ChartCard from "./ChartCard";
import RevenueChart from "./RevenueChart";
import PopularFieldChart from "./PopularFieldChart";

const ChartsSection = () => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <ChartCard title="Grafik Pendapatan">
        <RevenueChart />
      </ChartCard>

      <ChartCard title="Grafik Lapangan Terpopuler">
        <PopularFieldChart />
      </ChartCard>
    </div>
  );
};

export default ChartsSection;