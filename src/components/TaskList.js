import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask({ title: newTask, completed: false });
      setNewTask('');
    }
  };

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Add a new task"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Task
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;