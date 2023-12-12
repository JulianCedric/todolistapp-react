import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

// EditTask component receiving its props
const EditTaskForm = ({ editTask, editDesc, desc, taskId, onEdit, onCancel }) => {
  // State hook for managing the new description
  const [ newDesc, setNewDesc ] = useState(desc);

  console.log('editTask:', editTask);
  console.log('editDesc:', editDesc);
  console.log('newDesc:', newDesc);

  // Function to handle form submission
  const onEditCallback = () => {
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
          value={editDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" onClick={onEditCallback}>Save & Submit</Button>
      <Button type="button" onClick={onCancel}>Cancel</Button>
    </Form>
  );
};

export default EditTaskForm;