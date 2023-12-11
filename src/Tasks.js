import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import NewTask from './NewTask';
import Task from './Task';

const Tasks = props => {
    console.log('./Tasks, props:', props);

    const { tasks, addTask, editTask, deleteTask } = props;
    const tasksList = tasks.map(task => 
        <Task 
            key={task.id} 
            desc={task.desc} 
            onEdit={editTask}
            onDelete={deleteTask}
            taskId={task.id}
        >
            {task.desc}
        </Task>);

    return (
        <>
            <Grid verticalAlign='middle' centered columns={3}>
                <Grid.Row centered columns={3}>

                    <Grid.Column width={6}>
                    </Grid.Column>

                    <Grid.Column textAlign='center' width={4}>
                        <h2>ToDo List App</h2>
                        <NewTask addTask={addTask} tasks={props.tasks}/>
                    </Grid.Column>

                    <Grid.Column width={6}>
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row centered columns={3}>
                    <Grid.Column width={6}>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <h3 style={{ textAlign: 'center' }}>Tasks</h3>
                        <div>
                            <ul style={{ listStyleType: 'none', backgroundColor: '#E0E1E2' }}>{tasksList}</ul>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={6}>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
};

export default Tasks;