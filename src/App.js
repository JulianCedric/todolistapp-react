import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';
import './App.css';
import Tasks from './Tasks';
import NewTaskForm from './NewTaskForm';
import EditTaskForm from './EditTaskForm';

const TASKS = [];

const App = () => {
  const [ tasks, setTasks ] = useState(TASKS);
  const [ renderEditTaskForm, setRenderEditTaskForm ] = useState(false);

  const handleNewTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleEditTask = (taskId, newDesc) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, desc: newDesc };
      }
      return task;
    }));
  };

  const handleDelete = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    console.log('Task ', taskId, ' deleted.');
  };

  const toggleEditTaskForm = () => {
    console.log('user clicked edit btn');
  };

  return (
    <div className='App'>
      <Grid verticalAlign='middle' centered columns={3}>
        <Grid.Row centered columns={3}>
          <Grid.Column width={6} />
          <Grid.Column textAlign='center' width={4}>
              <h2>Tasks</h2>
              <NewTaskForm createTask={handleNewTask} tasks={tasks}/>
          </Grid.Column>
          <Grid.Column width={6} />
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column width={6} />
          <Grid.Column width={4}>
          <Tasks 
            tasks={tasks} 
            createTask={handleNewTask}
            editTask={handleEditTask}
            onDelete={handleDelete}
            toggleEdit={toggleEditTaskForm}
          />
          </Grid.Column>
          <Grid.Column width={6} />
        </Grid.Row>
        { renderEditTaskForm && tasks[0] ? <EditTaskForm /> : <p>here</p> }
      </Grid>
    </div>
  );
};

export default App;