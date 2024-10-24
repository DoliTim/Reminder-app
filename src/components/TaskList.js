import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, addTask }) => {
  const [newTask, setNewTask] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [reminderMethod, setReminderMethod] = useState('email');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask({
        title: newTask,
        date: reminderDate,
        time: reminderTime,
        method: reminderMethod,
        completed: false
      });
      setNewTask('');
      setReminderTime('');
      setReminderDate('');
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
        <input
          type="date"
          value={reminderDate}
          onChange={(e) => setReminderDate(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="time"
          value={reminderTime}
          onChange={(e) => setReminderTime(e.target.value)}
          className="border p-2 mr-2"
        />
        <select
          value={reminderMethod}
          onChange={(e) => setReminderMethod(e.target.value)}
          className="border p-2 mr-2"
        >
          <option value="email">Email</option>
          {/* Add more options if needed */}
        </select>
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

export default TaskList