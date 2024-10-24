// src/components/Task.js

import React from 'react';

const Task = ({ task, toggleComplete }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 my-2 rounded">
      <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
    </div>
  );
};

export default Task;
