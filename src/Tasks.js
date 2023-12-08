import React, { useState } from 'react';
import NewTask from './NewTask';
import Task from './Task';

const TASKS = [
    {
        id: 1,
        desc: 'Groceries'
    }
];

const Tasks = () => {

    const [ tasks, setTasks ] = useState(TASKS);

    const newTask = () => {
        console.log('here2');

        console.log('task:');
    };

    return(
        <div>
            <p>Tasks [ Container ]</p>
            <NewTask />
            <p>Tasks</p>
            <Task desc='Groceries' tasks={tasks}/>
        </div>
    )
};

export default Tasks;