import React, { useState } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';

const Task = ({ desc, onEdit, onDelete, taskId, toggleEdit }) => {
    const [checked, setChecked] = useState(false);
    
    const toggleEditCallback = () => {
        console.log('toggleEditCallback, taskId:', taskId);
        toggleEdit(taskId, desc);
    };

    const onDeleteCallback = () => {
        onDelete(taskId);
    };

    return (
        <>
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Checkbox
                    label={desc}
                    onChange={(e, data) => setChecked(data.checked)}
                    checked={checked}
                />
                <div>
                    <Button icon='edit outline' size='small' onClick={toggleEditCallback} />
                    <Button icon='trash alternate outline' size='small' onClick={onDeleteCallback} />
                </div>
            </li>
        </>
    );
};

export default Task;