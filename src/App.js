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
  const [ editTask, setEditTask ] = useState(null);
  const [ editTaskId, setEditTaskId ] = useState(0);
  const [ editDesc, setEditDesc ] = useState('');

  console.log('tasks:', tasks);

  const handleNewTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleEdit = (taskId, newDesc) => {
    console.log('user submitted edited task');
    console.log('taskId:', taskId);
    console.log('newDesc:', newDesc);

    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, desc: newDesc };
      }
      return task;
    }));

    setRenderEditTaskForm(prevState => {
      return !prevState;
    });
  };

  const handleCancelEdit = () => {
    setRenderEditTaskForm(prevState => {
      return !prevState;
    });
  }; 

  const handleDelete = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    console.log('Task ', taskId, ' deleted.');
  };

  const toggleEditTaskForm = (taskId, desc) => {
    console.log('user clicked edit btn');
    
    setRenderEditTaskForm(true);
    
    const currTask = tasks.filter(task => task.id === taskId);
    console.log('currTask:', currTask);
    setEditTask(currTask);

    setEditTaskId(taskId);

    const currDesc = desc;
    console.log('currDesc:', currDesc); 
    setEditDesc(currDesc);
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
          { !renderEditTaskForm && tasks.length > 0 ? <hr /> : <p> </p>}
          <Tasks 
            tasks={tasks} 
            createTask={handleNewTask}
            editTask={handleEdit}
            onDelete={handleDelete}
            toggleEdit={toggleEditTaskForm}
          />
          </Grid.Column>
          <Grid.Column width={6} />
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column width={6} />
          <Grid.Column width={4}>
            { renderEditTaskForm && tasks.length > 0 ? <EditTaskForm editTask={editTask} editTaskId={editTaskId} editDesc={editDesc} onEdit={handleEdit} onCancel={handleCancelEdit}/> : <p> </p> }
          </Grid.Column>
          <Grid.Column width={6}/>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default App;