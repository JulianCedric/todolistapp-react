import React, { useState } from 'react';
import NewTask from './NewTask';
import Task from './Task';

// const TASKS = [
//     {
//         id: 0,
//         desc: 'something'
//     }
// ];

const Tasks = () => {

    const [ tasks, setTasks ] = useState('');

    const newTask = () => {
        console.log('here2');

        console.log('task:');
    };

    return(
        <div>
            <p>Tasks [ Container ]</p>
            <NewTask />
            <p>Tasks</p>
            <Task desc='Groceries'/>
        </div>
    )
};

export default Tasks;