import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const NewTask = props => {
    const { addTask } = props;
    const { tasks } = props;
    const [newDesc, setNewDesc] = useState('');
    // console.log('Date.now():', Date.now());

    const handleChange = value => {
        console.log('e.target.value:', value);
        setNewDesc(value); 
        console.log('newDesc:', newDesc);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (addTask) {
            const newTask = {
                id: tasks.length + 1,
                desc: newDesc
            }
            addTask(newTask); 
        }
        setNewDesc(''); 
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Input
                        placeholder='New task'
                        name='newDesc'
                        value={newDesc}
                        onChange={e => handleChange(e.target.value)}
                        width={16}
                    />
                </Form.Group>
                <Button type="submit" color='blue' fluid>Submit</Button>
            </Form>
        </>
    );
};

export default NewTask;
