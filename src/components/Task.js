import React from 'react';

const Task = ({ task }) => {
  return (
    <li className="bg-gray-50 p-4 rounded shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-600">{task.date} at {task.time}</p>
        </div>
        <span className={`text-xs font-bold ${task.completed ? 'text-green-500' : 'text-red-500'}`}>
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>
    </li>
  );
};

export default Task;