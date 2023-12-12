import React, { useState } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';

// Task component receiving its props
const Task = ({ desc, onEdit, onDelete, taskId, onToggle }) => {
    // State for managing checkbox and edit mode
    const [checked, setChecked] = useState(false);
    
    // Function to toggle edit mode
    const toggleEditMode = () => {
        console.log(taskId);
    };
    

    // Function to handle task deletion
    const handleDelete = () => {
        onDelete(taskId);
    };

    // Rendering the task with options to edit or delete
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
                    <Button icon='trash alternate outline' size='small' onClick={handleDelete} />
                </div>

                {/* { editMode ? (
                    <EditTask
                        desc={desc}
                        taskId={taskId}
                        onEdit={onEdit}
                        onCancel={() => setEditMode(false)}
                    />
                ) : (
                    console.log('here')
                )
            }; */}
            </li>
        </>
    );
};

export default Task;
