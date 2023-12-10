import React, { useState } from 'react';
import { Checkbox, Button } from 'semantic-ui-react';

const Task = props => {
    const [checked, setChecked] = useState(false);

    const handleEdit = () => {
        console.log("Edit Task:", props.desc);

    };

    const handleDelete = () => {
        console.log("Delete Task:", props.desc);

    };

    return (
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Checkbox
                label={props.desc}
                onChange={(e, data) => setChecked(data.checked)}
                checked={checked}
            />
            <div>
                <Button size="small" onClick={handleEdit}>Edit</Button>
                <Button size="small" onClick={handleDelete}>Delete</Button>
            </div>
        </li>
    );
};

export default Task;