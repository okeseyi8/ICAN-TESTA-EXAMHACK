// import React from 'react';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ['Finance', 'Business Law', 'Management', 'Business & Finance', 'QTB',],
    datasets: [
      {
        label: '',
        data: [80, 70, 100, 57, 69,],
        backgroundColor: '#493EE6',
        borderColor: '#9BD3D6',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          minRotation: 0,
          maxRotation: 90,
        },
        // Control bar thickness globally here
        maxBarThickness: 1,      // fixed thickness
        // OR use maxBarThickness: 80 to set an upper limit
      },
      y: {
        min: 0,
        max: 100,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ height: '280px',}}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
