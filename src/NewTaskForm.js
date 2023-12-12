import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const NewTaskForm = ({ createTask, tasks }) => {
    const [ newDesc, setNewDesc ] = useState('');

    const handleChange = value => {
        setNewDesc(value); 
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (newDesc.trim()) { 
            const newTask = {
                id: tasks.length + 1,  
                desc: newDesc
            }
            createTask(newTask);  
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
                    onChange={e => handleChange(e.target.value)}
                    width={16}
                />
            </Form.Group>
            <Button type="submit" color='blue' fluid>Submit</Button>
        </Form>
    );
};

export default NewTaskForm;