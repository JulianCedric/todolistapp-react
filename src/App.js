import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Tasks from './Tasks';

const TASKS = [];

const App = () => {
  const [ tasks, setTasks ] = useState(TASKS);

  const handleAddTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleEditTask = () => {

  };

  const handleDeleteTask = () => {

  };

  return (
    <div className='App'>
      <Tasks 
        tasks={tasks} 
        addTask={handleAddTask}
        deleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;