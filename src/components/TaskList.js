// src/components/TaskList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: 1, text: 'Did you take the pill?', completed: false },
          { id: 2, text: 'Did you meditate?', completed: false },
          { id: 3, text: 'Did you improve and build on Git?', completed: false },
        ];
  });

  const [newTask, setNewTask] = useState('');

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    const completedTask = updatedTasks.find((task) => task.id === id);

    // Push to Google Sheets via Make.com
    axios.post('https://hook.make.com/your-webhook-url', {
      task: completedTask.text,
      completed: completedTask.completed,
      timestamp: new Date().toISOString(),
    });
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask.trim(), completed: false },
      ]);
      setNewTask('');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleComplete={toggleComplete} />
      ))}
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-grow p-2 border rounded-l"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r"
          onClick={addTask}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskList;
