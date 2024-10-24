// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import TaskList from './components/TaskList'; // Assuming you have a task list component

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userObject) => {
    setUser(userObject);
    // Handle post-login operations here (e.g., saving user data, etc.)
  };

  const handleLogout = () => {
    setUser(null);  // Clear user session
  };

  return (
    <div className="container">
      <h1>Welcome to the Reminder App</h1>
      {user ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <TaskList user={user} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
