import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Tasks from './Tasks';

const TASKS = [];

const App = () => {
  const [ tasks, setTasks ] = useState(TASKS);

  const handleNewTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleDelete = () => {

  };

  return (
    <div className='App'>
      <Tasks 
        tasks={tasks} 
        addTask={handleNewTask}
        deleteTask={handleDelete}
      />
    </div>
  );
};

export default App;