import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import NewTask from './NewTask';
import Task from './Task';

const Tasks = props => {
    const { tasks, addTask } = props;
    const tasksList = tasks.map(task => <Task key={task.id} desc={task.desc}>{task.desc}</Task>);

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
                    <Grid.Column>
                        {/* <p>here3</p> */}
                    </Grid.Column>
                    <Grid.Column>
                        <h3 style={{ textAlign: 'center' }}>Tasks</h3>
                        <div>
                            <ul style={{ listStyleType: 'none' }}>{tasksList}</ul>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        {/* <p>here4</p> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
};

export default Tasks;