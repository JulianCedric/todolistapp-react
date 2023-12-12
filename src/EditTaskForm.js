import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

// EditTask component receiving its props
const EditTaskForm = ({ desc, taskId, onEdit, onCancel }) => {
  // State hook for managing the new description
  const [newDesc, setNewDesc] = useState(desc);

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    onEdit(taskId, newDesc);  // Triggering the onEdit function passed as a prop
  };

  // Rendering the form with save and cancel options
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input
          autoFocus
          type="text"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Save</Button>
      <Button type="button" onClick={onCancel}>Cancel</Button>
    </Form>
  );
};

export default EditTaskForm;