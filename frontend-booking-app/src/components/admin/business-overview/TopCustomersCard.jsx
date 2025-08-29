const TopCustomersCard = () => {
  // Data ini nantinya akan datang dari API
  const topCustomers = [
    { name: 'Ade Aditya', transactions: 25 },
    { name: 'Felix Corputy', transactions: 21 },
    { name: 'Abd Idhul Rahim', transactions: 18 },
    { name: 'Maldi Saesar', transactions: 15 },
    { name: 'Aliza Nurfitrian', transactions: 18 },
    { name: 'Naruto Uzumaki', transactions: 15 },
    { name: 'Senku Lestari', transactions: 18 },
    { name: 'Dewi Anggraini', transactions: 15 },
    { name: 'Senku Lestari', transactions: 18 },
    { name: 'Dewi Anggraini', transactions: 15 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-dark-red mb-4">Daftar 10 Pelanggan Teratas</h3>
      <div className="space-y-4">
        {topCustomers.map((customer, index) => (
          <div key={index} className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-800">{customer.name}</p>
            <p className="text-sm text-gray-500">{customer.transactions}x Transaksi</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCustomersCard;