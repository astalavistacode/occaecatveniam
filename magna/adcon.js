import { PieChartComponent } from 'pie-chart-component';

const data = [
  { label: 'Category A', value: 30 },
  { label: 'Category B', value: 20 },
  { label: 'Category C', value: 50 },
];

const options = {
  colors: ['#FF5733', '#33FF57', '#3357FF'],
  label: 'Pie Chart Example',
};

const pieChart = new PieChartComponent('chart-container', data, options);
pieChart.render();
