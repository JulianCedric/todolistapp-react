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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (newDesc.trim()) { 
    //         const newTask = {
    //             description: newDesc,
    //             completed: false
    //         };
    //         try {
    //             const response = await fetch('http://localhost:3001/tasks', {
    //                 method: 'POST',
    //                 body: JSON.stringify(newTask),
    //                 headers: { 'Content-Type': 'application/json' }
    //             });
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const addedTask = await response.json();
    //             createTask(addedTask);  
    //             setNewDesc('');
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     }
    // };

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