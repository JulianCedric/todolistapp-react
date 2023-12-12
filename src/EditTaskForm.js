import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const EditTaskForm = ({ editTask, editDesc, editTaskId, onEdit, onCancel }) => {
  const [newDesc, setNewDesc] = useState(editDesc);

  console.log('editTask:', editTask);
  console.log('editDesc:', editDesc);
  console.log('newDesc:', newDesc);

  const handleChange = e => {
    setNewDesc(e.target.value);
    console.log('newDesc:', newDesc);
  };

  const onEditCallback = e => {
    e.preventDefault();
    onEdit(editTaskId, newDesc); 
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