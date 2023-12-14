import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const EditTaskForm = ({ editTask, editDesc, editTaskId, onEdit, onCancel }) => {
  const [newDesc, setNewDesc] = useState(editDesc);

  const handleChange = e => {
    setNewDesc(e.target.value);
  };

  const onEditCallback = async (e) => {
    e.preventDefault();
    const updatedTask = {
      description: newDesc,
      completed: false
    };

    try {
      const response = await fetch(`http://localhost:3001/tasks/${editTaskId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedTask),
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const taskData = await response.json();
      console.log('onEditCallback function, taskData:', taskData);
      onEdit(taskData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onCancelCallback = () => {
    onCancel();
  };

  return (
    <Form onSubmit={onEditCallback}>
      <Form.Group>
        <Form.Input
          autoFocus
          type="text"
          value={newDesc}
          onChange={handleChange}
          width={16}
        />
      </Form.Group>
      <Button.Group widths='2'>
        <Button type="submit">Save & Submit</Button>
        <Button className='hover-text-orange' type="button" onClick={onCancelCallback} floated='right'>Cancel</Button>
      </Button.Group>
    </Form>
  );
};

export default EditTaskForm;