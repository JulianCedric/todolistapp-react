import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

// NewTaskForm component receiving its props
const NewTaskForm = ({ createTask, tasks }) => {
    // State hook for the new task description
    const [ newDesc, setNewDesc ] = useState('');

    // Function to handle changes in the input field
    const handleChange = value => {
        setNewDesc(value); 
    };

    // Function to handle form submission
    const handleSubmit = e => {
        e.preventDefault();
        if (newDesc.trim()) {  // Check if newDesc is not just white space
            const newTask = {
                id: tasks.length + 1,  // Generating a new ID
                desc: newDesc
            }
            createTask(newTask);  // Triggering the createTask function passed as a prop
            setNewDesc('');  // Resetting the input field
        }
    };

    // Rendering the form for adding a new task
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Input
                    autoFocus
                    placeholder='New task'
                    type='text'
                    value={newDesc}
                    onChange={e => handleChange(e.target.value)}
                    width={16}
                />
            </Form.Group>
            <Button type="submit" color='blue' fluid>Submit</Button>
        </Form>
    );
};

export default NewTaskForm;
