import React from 'react';
import DataTable from 'react-data-table-component';
import { mockData } from './MockData';

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Director',
    selector: 'director',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];

// const data = [
//   { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: '1994' },
//   { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: '1972' },
//   // ... add as many movies as you want
// ];

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <DataTable
        title="Movies"
        columns={columns}
        data={mockData}
        pagination
      />
    </div>
  );
}

export default App;
