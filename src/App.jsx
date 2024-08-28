import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete assignments', completed: true },
    { id: 2, text: 'Going Gym', completed: false },
    { id: 3, text: 'Shopping for Nofil Birthday', completed: false },
    { id: 4, text: 'Meeting with the Owner of Closing Cartel', completed: false },
    { id: 5, text: 'Dinner At KABABJEES', completed: false },
  ]);
  
  const [newTask, setNewTask] = useState('');

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObject = {
        id: tasks.length + 1,
        text: newTask,
        completed: false
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask(''); // Clear input
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#000000',  // Black background behind the to-do app box
        minHeight: '90vh',
        minWidth: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="max-w-md mx-auto bg-card rounded-lg shadow-lg p-6"
        style={{
          backgroundColor: '#ffffff', // White background for the to-do app box
          color: '#000000',  // Black text color
          boxShadow: '10px 10px 20px #cbced1, -10px -10px 20px #ffffff'  // Neomorphic effect
        }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '0.5rem' }}>To-do List</h3>
        <div className="mt-4">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center mt-2 ml-6">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 text-primary" 
                checked={task.completed} 
                onChange={() => toggleTask(task.id)}
              />
              <label className={`ml-2 ${task.completed ? 'line-through' : ''}`} style={{ color: '#000000' }}>{task.text}</label>
              <button 
                className="ml-2" 
                style={{ color: '#ff0000' }} // Red color for remove button
                onClick={() => removeTask(task.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <input 
            type="text" 
            placeholder="Add task..." 
            className="border border-border rounded-lg p-2 w-full" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
          />
          <button 
            className="mt-2 bg-primary text-primary-foreground rounded-full p-2 w-full flex items-center justify-center"
            onClick={addTask}
            style={{
              boxShadow: '5px 5px 10px #cbced1, -5px -5px 10px #ffffff'  // Neomorphic button hover effect
            }}
          >
            <span className="text-lg">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
