import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const NewTaskForm = ({ createTask }) => {
    const [newDesc, setNewDesc] = useState('');

    const handleChange = (e) => {
        setNewDesc(e.target.value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newDesc.trim()) {
          const newTaskData = {
            description: newDesc,
            completed: false
          };
          createTask(newTaskData); 
          setNewDesc(''); 
        }
      };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Input
                    autoFocus
                    placeholder='New task'
                    type='text'
                    value={newDesc}
                    onChange={handleChange}
                    width={16}
                />
            </Form.Group>
            <Button type="submit" color='blue' fluid>Submit</Button>
        </Form>
    );
};

export default NewTaskForm;