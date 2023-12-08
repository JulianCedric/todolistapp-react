import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';


const NewTask = newTask => {

    const [ desc, setDesc ] = useState('');

    const handleChange = e => {
        console.log('e.target.value:', e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('here');
    };

    return (
        <>
            <p>New Task</p>
            <Form onSubmit={(e) => handleSubmit(e.target.value)}>
                <Form.Group>
                    <Form.Input
                        placeholder='New task'
                        value={desc}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </Form.Group>
                <Button>Submit</Button>
            </Form>
        </>
    );
};

export default NewTask; 