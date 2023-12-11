import React, { useState } from 'react';
import { Checkbox, Button } from 'semantic-ui-react';

const Task = props => {
    console.log('./Task.js, props:', props);
    console.log('./Task.js, props.onDelete:', props.onDelete);

    const [ checked, setChecked ] = useState(false);

    const handleCheck = () => {
        console.log('Task checked');
    };

    const handleEdit = () => {
        console.log('Edit Task:', props.desc);
        props.onEdit(props.taskId);
    };

    const handleDelete = () => {
        console.log('Delete Task:', props.desc);
        console.log('props.key:', props.key);
        props.onDelete(props.taskId);
    };

    return (
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Checkbox
                label={props.desc}
                onChange={(e, data) => setChecked(data.checked)}
                checked={checked}
            />
            <div>
                <Button 
                    size='small'
                    border='none'
                    backgroundColor='#f5f5f5'
                    onClick={handleEdit}
                >
                    Edit
                </Button>
                <Button size="small" onClick={handleDelete}>Delete</Button>
            </div>
        </li>
    );
};

export default Task;