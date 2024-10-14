import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [21, 51, 40, 50, 44, 60, 55, 44, 22, 13];
const pData = [40, 79, 40, 50, 44, 60, 55, 44, 43, 3];
const vData = [55, 49, 40, 50, 44, 60, 55, 44, 23, 20];

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
    <div className="bg-white rounded-lg p-6 shadow-md items-center space-x-4 w-full">
    <p>Booking Analytics</p>
    <hr width="100%" className='p-1'></hr>
    <BarChart
      width={600}
      height={353}
      series={[
        { data: pData, label: 'Football', id: 'pvId', stack: 'total',  color: '#40145d' },
        { data: uData, label: 'Basketball', id: 'uvId', stack: 'total',  color: '#a83b8b' },
        { data: vData, label: 'Volleyball', id: 'vvId', stack: 'total', color: '#d97895' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
    </div>
  );
}
