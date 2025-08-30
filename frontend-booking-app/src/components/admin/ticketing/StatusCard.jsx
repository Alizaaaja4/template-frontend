import successIcon from "../../../assets/success.png";
import pendingIcon from "../../../assets/pending.png"; 
import failedIcon from "../../../assets/failed.png";   

const cardsData = [
  { title: "Total Success", value: "200", icon: successIcon, bgColor: "bg-hijau-semi-dark" },
  { title: "Total Failed", value: "7", icon: failedIcon, bgColor: "bg-dark-red" },
];

const StatusCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cardsData.map((card) => (
        <div key={card.title} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between gap-4">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">{card.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-1">{card.value}</p>
          </div>
          <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${card.bgColor}`}>
            <img src={card.icon} alt={card.title} className="h-6 w-6" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusCards;