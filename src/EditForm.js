import React, { useState } from 'react';

const EditForm = ({ desc, taskId, onEdit, onCancel }) => {
  const [ newDesc, setNewDesc ] = useState(desc);

  const handleSubmit = e => {
    e.preventDefault();
    onEdit(taskId, newDesc);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newDesc}
        onChange={(e) => setNewDesc(e.target.value)}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditForm;