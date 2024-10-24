import React, { useState, useEffect, useCallback } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header';
import Login from './components/Login';
import TaskList from './components/TaskList';
import { handleGoogleSignIn } from './services/googleAuth';
import { sendUserDataToMake, addReminderToMake, getRemindersFromMake } from './services/makeService';

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchReminders = useCallback(async () => {
    if (user) {
      const reminders = await getRemindersFromMake(user.email);
      setTasks(reminders);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchReminders();
    }
  }, [user, fetchReminders]);

  const onSignIn = async (googleUser) => {
    const userData = await handleGoogleSignIn(googleUser);
    setUser(userData);
    await sendUserDataToMake(userData);
  };

  const addTask = async (task) => {
    const newTask = await addReminderToMake(task, user.email);
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center">
        <Header user={user} />
        <div className="w-full max-w-2xl p-4">
          {!user ? (
            <Login onSignIn={onSignIn} />
          ) : (
            <TaskList tasks={tasks} addTask={addTask} />
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;