import React, { useState } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';

const Task = ({ desc, onEdit, onDelete, taskId, onToggle }) => {
    const [checked, setChecked] = useState(false);
    
    const toggleEditMode = () => {
        console.log(taskId);
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
                    <Button icon='edit outline' size='small' onClick={toggleEditMode} />
                    <Button icon='trash alternate outline' size='small' onClick={onDeleteCallback} />
                </div>
            </li>
        </>
    );
};

export default Task;