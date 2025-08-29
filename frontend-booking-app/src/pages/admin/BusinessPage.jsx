import Header from "../../components/admin/business-overview/Header";
import Statistics from "../../components/admin/business-overview/Statistics";
import ChartsSection from "../../components/admin/business-overview/ChartsSection";
import TopCustomersCard from "../../components/admin/business-overview/TopCustomersCard";

const BusinessPage = () => {
  return (
    <div className="p-1 md:p-4">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="md:col-span-2 lg:col-span-2">
          <ChartsSection />
        </div>

        <div className="md:col-span-2 lg:col-span-1 space-y-6">
          <Statistics />
          <TopCustomersCard />
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;