import React, { useState, useEffect } from 'react';
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

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3001/tasks'); // Replace with your Rails API URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const tasksData = await response.json();
      setTasks(tasksData);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleNewTask = async (newTaskData) => {
    try {
      const response = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        body: JSON.stringify(newTaskData),
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const addedTask = await response.json();
      setTasks(prevTasks => [...prevTasks, addedTask]); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = async (newTaskData) => {
    // console.log('handleEdit function, newTaskData:', newTaskData);
    // console.log('handleEdit function, newTaskData.id:', newTaskData.id);
    
    const taskId = newTaskData.id;
    const newDesc = newTaskData.desc;
    
    const updatedTask = {
        description: newDesc,
        completed: false
    };

    console.log('newTaskData:', newTaskData);


    console.log('taskId:', taskId);
  
    try {
      const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedTask),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const taskData = await response.json();
  
      setTasks(prevTasks => prevTasks.map(task => {
        return task.id === taskId ? taskData : task;
      }));
  
      setRenderEditTaskForm(prevState => {
        return !prevState;
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancelEdit = () => {
    setRenderEditTaskForm(prevState => {
      return !prevState;
    });
  }; 

  const handleDelete = async (taskId) => {
    try {
        const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    } catch (error) {
        console.error('Error:', error);
    }
};

  const toggleEditTaskForm = (taskId, desc) => {    
    setRenderEditTaskForm(prevState => {
      return !prevState;
    });
    
    const currTask = tasks.filter(task => task.id === taskId);
    setEditTask(currTask);

    setEditTaskId(taskId);

    const currDesc = desc;
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