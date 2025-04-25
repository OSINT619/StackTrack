import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Catalog() {
  const [programs, setPrograms] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('/api/programs').then((response) => {
      setPrograms(response.data);
    });
  }, []);

  const filteredPrograms = programs.filter((program) =>
    program.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Program Catalog</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Features</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {filteredPrograms.map((program) => (
            <tr key={program._id}>
              <td>{program.name}</td>
              <td>{program.category}</td>
              <td>{program.features.join(', ')}</td>
              <td>{program.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Catalog;