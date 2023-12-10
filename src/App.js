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

  return (
    <div className='App'>
      <Tasks tasks={tasks} addTask={handleNewTask}/>
    </div>
  );
};

export default App;