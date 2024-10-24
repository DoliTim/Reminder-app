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
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Reminders</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task"
        />
        <input
          type="date"
          value={reminderDate}
          onChange={(e) => setReminderDate(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="time"
          value={reminderTime}
          onChange={(e) => setReminderTime(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={reminderMethod}
          onChange={(e) => setReminderMethod(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="email">Email</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
          Add Task
        </button>
      </form>
      <ul className="mt-6 space-y-2">
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;