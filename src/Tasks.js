import React, { useState } from 'react';
import Task from './Task';

const Tasks = ({ tasks, addTask, editTask, onDelete, toggleEdit }) => {
    const [ editMode, setEditMode ] = useState(false);    
    const tasksList = tasks.map(task => 
        <Task 
            key={task.id} 
            desc={task.desc} 
            onEdit={editTask}
            onDelete={onDelete}
            taskId={task.id}
            onToggle={toggleEdit}
        />
    );

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <div>
            <ul style={{ listStyleType: 'none', backgroundColor: '#E0E1E2' }}>{tasksList}</ul>
        </div>
    );
};

export default Tasks;