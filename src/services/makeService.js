import axios from 'axios';

const MAKE_WEBHOOK_URL = process.env.REACT_APP_MAKE_WEBHOOK_URL;

export const sendUserDataToMake = async (userData) => {
  try {
    await axios.post(`${MAKE_WEBHOOK_URL}/user`, userData);
  } catch (error) {
    console.error('Error sending user data to Make:', error);
  }
};

export const addReminderToMake = async (task, userEmail) => {
  try {
    const response = await axios.post(`${MAKE_WEBHOOK_URL}/reminder`, { task, userEmail });
    return response.data;
  } catch (error) {
    console.error('Error adding reminder to Make:', error);
  }
};

export const getRemindersFromMake = async (userEmail) => {
  try {
    const response = await axios.get(`${MAKE_WEBHOOK_URL}/reminders?email=${userEmail}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reminders from Make:', error);
    return [];
  }
};