import React, { useState } from 'react';

const EditModel = ({ data, onSave, onClose,candidateId }) => {
  if(candidateId!==undefined){
    data.candidate_Id=candidateId
  }
  const convertKeysToLowercase = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = key.charAt(0).toLowerCase() + key.slice(1); // Change first letter to lowercase
      acc[newKey] = obj[key]; // Assign original value to the new key
      return acc;
    }, {});
  };

  // Create formData with updated keys
  const [formData, setFormData] = useState(convertKeysToLowercase(data));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData); // Pass updated data to parent
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Edit Data</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          {Object.entries(formData)?.map(([key, value]) => (
            <div key={key} className="form-group">
              <label>{key}</label>
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          ))}
          <div className="modal-actions">
            <button
              type="button"
              onClick={onClose}
              className="cancel-button"
            >
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModel;

// Integrated CSS for modal styling, fixed height, and scroll
const style = document.createElement('style');
style.innerHTML = `
  /* Modal overlay styling */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  /* Modal content container */
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    max-height: 80vh; /* Fixed height */
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  /* Scrollable form inside modal */
  .modal-form {
    flex-grow: 1;
    overflow-y: auto; /* Enable vertical scroll */
  }

  /* Modal title */
  .modal-title {
    margin-bottom: 20px;
    font-size: 1.5rem;
    text-align: center;
  }

  /* Form group for input fields */
  .form-group {
    margin-bottom: 15px;
  }

  /* Labels for inputs */
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  /* Input styling */
  .form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  /* Modal action buttons (save and cancel) */
  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding-top: 10px;
  }

  .save-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }

  .cancel-button {
    background-color: #6c757d;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }

  /* Hover effects for buttons */
  .save-button:hover {
    background-color: #0056b3;
  }

  .cancel-button:hover {
    background-color: #5a6268;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .modal-title {
      font-size: 1.3rem;
    }

    .form-input {
      padding: 8px;
      font-size: 0.9rem;
    }

    .save-button, .cancel-button {
      font-size: 0.9rem;
      padding: 8px 16px;
    }
  }

  @media (max-width: 480px) {
    .modal-title {
      font-size: 1.1rem;
    }

    .form-input {
      padding: 6px;
      font-size: 0.8rem;
    }

    .save-button, .cancel-button {
      font-size: 0.8rem;
      padding: 6px 12px;
    }
  }
`;
document.head.appendChild(style);
