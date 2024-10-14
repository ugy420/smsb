import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: '09:00 AM', col2: 'Karma Wangchuk', col3: '77123456', col4: '2024-10-14' },
  { id: 2, col1: '10:30 AM', col2: 'Tandin Dorji', col3: '77187654', col4: '2024-10-15' },
  { id: 3, col1: '01:00 PM', col2: 'Sonam Choden', col3: '17234567', col4: '2024-10-16' },
  { id: 4, col1: '03:15 PM', col2: 'Pema Tshering', col3: '17123498', col4: '2024-10-17' },
  { id: 5, col1: '05:45 PM', col2: 'Jigme Norbu', col3: '77109876', col4: '2024-10-18' },
  { id: 6, col1: '07:00 PM', col2: 'Kinley Zangmo', col3: '17198765', col4: '2024-10-19' },
];

const columns = [
  { field: 'col1', headerName: 'Time', width: 260},
  { field: 'col2', headerName: 'User', width: 260},
  { field: 'col3', headerName: 'Phone Number', width: 260},
  { field: 'col4', headerName: 'Date', width: 260},
];


export default function DataGriddy() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
