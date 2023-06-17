import './Abuelitos.css';
import 'chart.js/auto';

import { Pie } from 'react-chartjs-2';


function Abuelitos() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  
  const options = {

  }
  return (
    <div>
      <h1>Abuelitos</h1>
      <h1>ABUELITOS JUN 12 LOGIN AA1 </h1>
      <Pie className = 'pieChartTest' data={data} options = {options} />
    </div>
  );
}

export default Abuelitos;
