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

  const handleEditTask = (taskId, newDesc) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, desc: newDesc };
      }
      return task;
    }));
};

  const handleDeleteTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div className='App'>
      <Tasks 
        tasks={tasks} 
        addTask={handleAddTask}
        editTask={handleEditTask}
        deleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;