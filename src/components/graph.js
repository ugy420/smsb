import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [21, 30, 40, 50, 44, 60, 55, 44, 22, 13];
const pData = [21, 30, 40, 50, 44, 60, 55, 44, 43, 3];
const vData = [21, 30, 40, 50, 44, 60, 55, 44, 23, 20];

const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export default function StackedBarChart() {
  return (
    <BarChart
      width={750}
      height={500}
      series={[
        { data: pData, label: 'Football', id: 'pvId', stack: 'total' , color:'darkblue'},
        { data: uData, label: 'Basketball', id: 'uvId', stack: 'total', color: 'yellow'},
        { data: vData, label: 'Volleyball', id: 'vvId', stack: 'total', color: 'pink' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}
