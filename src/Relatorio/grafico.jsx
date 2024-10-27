// Grafico.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Grafico = ({ despesas, receitas }) => {
  const data = {
    labels: ['Despesas', 'Receitas'],
    datasets: [
      {
        data: [
          despesas.reduce((acc, despesa) => acc + despesa.valor, 0),
          receitas.reduce((acc, receita) => acc + receita.valor, 0),
        ],
        backgroundColor: [
          'rgba(220, 0, 0, 1)',
          'rgba(75, 150, 19, 1)',
        ],
        borderColor: [
          'rgba(220, 0, 0, 1)',
          'rgba(75, 150, 19, 1)',
        ],
        borderWidth: 1,
        barThickness: 120,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Grafico;