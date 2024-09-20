import React, { useState } from 'react';

const TableComponent = ({ data, onEditClick, onDelete }) => {
  if (!data) return null;

  // Check if a row is selected
  return (
    <div className="table-container">
      <div className="table-header">
        <button className="edit-button" onClick={onEditClick}>
          Edit
        </button>
        <button
          className="delete-button"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>

      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Select</th>
              {Object.keys(data)?.map((key, index) => (
                <th key={index}>{key.replaceAll('_',' ')}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              </td>
              {Object.values(data)?.map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Adding styles dynamically as before
const style = document.createElement('style');
style.innerHTML = `
  .table-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .table-header h2 {
    margin: 0;
    font-size: 1.5rem;
  }
  .edit-button, .delete-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  .edit-button:hover, .delete-button:hover {
    background-color: #0056b3;
  }
  .delete-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .table-wrapper {
    overflow-x: auto;
    max-width: 100%;
  }

  .styled-table {
    width: 100%;
    min-width: 800px;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  .styled-table th, .styled-table td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
  }
  .styled-table th {
    background-color: #f2f2f2;
  }
  .styled-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;
document.head.appendChild(style);

export default TableComponent;
