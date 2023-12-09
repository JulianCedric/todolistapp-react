import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const Practice = () => {

    const [ task, setTask ] = useState({});

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setTask(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('user created a new task');
        console.log('task:', task);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input
                type='text'
                placeholder='New task'
                name='desc'
                value={task.desc}
                onChange={handleChange}
            />
            <Form.Input 
                type='text'
                placeholder='Day'
                name='day'
                value={task.day}
                onChange={handleChange}
            />    
            <Button>Submit</Button>
        </Form>
    );
};

export default Practice;