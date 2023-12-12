import React, { useState } from 'react';
import Task from './Task';

const Tasks = ({ tasks, addTask, editTask, deleteTask, toggleEdit }) => {
    const [ editMode, setEditMode ] = useState(false);    
    const tasksList = tasks.map(task => 
        <Task 
            key={task.id} 
            desc={task.desc} 
            onEdit={editTask}
            onDelete={deleteTask}
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

// </Grid.Column>
// <Grid.Column width={6} />
// </Grid.Row>
// </Grid>
// <Grid verticalAlign='middle' centered columns={3}>
// <Grid.Row centered columns={3}>
// <Grid.Column width={6} />
// <Grid.Column textAlign='center' width={4}>
//     {/* { editMode && ( 
//         <EditTask
//             desc={desc}
//             taskId={taskId}
//             onEdit={onEdit}
//             onCancel={() => setEditMode(false)}
//         />
//     )}; */}
// </Grid.Column>
// <Grid.Column width={6} />
// </Grid.Row>
// </Grid>
// </>