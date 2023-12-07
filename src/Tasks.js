import React from 'react';
import NewTask from './NewTask';
import Task from './Task';

const Tasks = () => {

    return(
        <div>
            <p>Tasks</p>
            <NewTask />
            <Task />
        </div>
    )
};

export default Tasks;