import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const NewTask = (props) => {
    const { addTask } = props;

    console.log('addTask:', addTask);
    console.log('props:', props);

    const [newDesc, setNewDesc] = useState('');

    const handleChange = (value) => {
        console.log('e.target.value:', value);
        setNewDesc(value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted task:', newDesc);
        if (addTask) {
            addTask(newDesc); 
        }
        setNewDesc(''); 
    };

    return (
        <>
            <p>New Task</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Input
                        placeholder='New task'
                        name='newDesc'
                        value={newDesc}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </>
    );
};

export default NewTask;
