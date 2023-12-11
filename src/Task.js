import React, { useState } from 'react';
import { Button, Checkbox, Icon } from 'semantic-ui-react';
import EditForm from './EditForm';

const Task = ({ desc, onDelete, onEdit, taskId }) => {
    // console.log('./Task.js, props:', props);
    // console.log('./Task.js, props.onDelete:', props.onDelete);

    const [ checked, setChecked ] = useState(false);
    const [ editMode, setEditMode ] = useState(false);

    const handleCheck = () => {
        console.log('Task checked');
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleDelete = () => {
        onDelete(taskId);
    };

    return (
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {editMode ? (
                <EditForm
                    desc={desc}
                    taskId={taskId}
                    onEdit={(id, newDesc) => {
                        onEdit(id, newDesc);
                        setEditMode(false);
                    }}
                    onCancel={() => setEditMode(false)}
                />
           ) : (
            <>
                <Checkbox
                    label={desc}
                    onChange={(e, data) => setChecked(data.checked)}
                    checked={checked}
                />
                <div>
                <Button 
                    size='small'
                    border='none'
                    backgroundColor='#f5f5f5'
                    onClick={toggleEditMode}
                >
                    <Icon name='edit outline'/>
                </Button>
                <Button 
                    size='small' 
                    border='none'
                    backgroundColor='#f5f5f5'
                    onClick={handleDelete}
                >
                    <Icon name='trash alternate outline'/>
                </Button>
                </div>
            </>     
            )}
        </li>
    );
};

export default Task;