import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement, 
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};

const labels = ['Lapangan A', 'Lapangan B', 'Lapangan C', 'Lapangan D', 'Lapangan E'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Jumlah Booking',
      data: [80, 65, 55, 45, 30],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const PopularFieldChart = () => {
    return <Bar options={options} data={data} />;
}

export default PopularFieldChart;