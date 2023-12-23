import React, { useState } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';

const Task = ({ desc, onEdit, onDelete, taskId, toggleEdit }) => {
    const [checked, setChecked] = useState(false);
    
    const toggleEditCallback = () => {
        toggleEdit(taskId, desc);
    };

    // const onDeleteCallback = () => {
    //     onDelete(taskId);
    // };

    return (
        <>
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Checkbox
                    label={desc}
                    onChange={(e, data) => setChecked(data.checked)}
                    checked={checked}
                />
                <div>
                    <Button className='hover-orange' icon='edit outline' size='small' onClick={toggleEditCallback} />
                    {/* <Button className='hover-orange' icon='trash alternate outline' size='small' onClick={onDeleteCallback} /> */}
                    <Button className='hover-orange' icon='trash alternate outline' size='small' onClick={() => onDelete(taskId)} />
                </div>
            </li>
        </>
    );
};

export default Task;