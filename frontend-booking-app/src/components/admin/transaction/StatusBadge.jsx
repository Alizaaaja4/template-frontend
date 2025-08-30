const StatusBadge = ({ status }) => {
  const baseClasses = "px-3 py-1 text-xs font-medium text-white rounded-md inline-block";

  switch (status.toLowerCase()) {
    case 'success':
      return <span className={`${baseClasses} bg-hijau-semi-dark`}>Success</span>;
    case 'pending':
      return <span className={`${baseClasses} bg-kuning`}>Pending</span>;
    case 'failed': // Anda menulis 'Failded' di data, ini perbaikannya
      return <span className={`${baseClasses} bg-dark-red`}>Failed</span>;
    default:
      return <span className={`${baseClasses} bg-gray-500`}>{status}</span>;
  }
};

export default StatusBadge;