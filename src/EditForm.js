import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const EditForm = ({ desc, taskId, onEdit, onCancel }) => {
  const [ newDesc, setNewDesc ] = useState(desc);

  const handleSubmit = e => {
    e.preventDefault();
    onEdit(taskId, newDesc);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Form.Input
          type="text"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          autoFocus
        />
      </Form.Field>
      <Button type="submit">Save</Button>
      <Button type="button" onClick={onCancel}>Cancel</Button>
    </Form>
  );
};

export default EditForm;