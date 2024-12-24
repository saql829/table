import React, { useState } from 'react';

const Table = () => {
  const [rows, setRows] = useState([
    { id: 1, name: 'Saqlain', age: 24 },
    { id: 2, name: 'Aziz', age: 51 },
  ]);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setNewAge(event.target.value);
  };

  const addRow = () => {
    if (newName.trim() === '' || newAge.trim() === '') return; // Avoid empty fields
    const newRow = {
      id: rows.length + 1,
      name: newName,
      age: parseInt(newAge, 10),
    };
    setRows([...rows, newRow]);
    setNewName('');
    setNewAge('');
  };

  return (
    <div>
      <h2>Basic Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="Enter the name"
          value={newName}
          onChange={handleNameChange}
        />
        <input
          type="number"
          placeholder="Enter the age"
          value={newAge}
          onChange={handleAgeChange}
        />
        <button onClick={addRow}>Add</button>
      </div>
    </div>
  );
};

export default Table;
