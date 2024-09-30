// app/api.js
import mockData from '../Mock.json'; // Import the mock data

// Fetch events from the mock JSON data
export const fetchEvents = async () => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(mockData); // Resolve the promise with the mock data
    }, 1000); // Delay for 1 second to mimic a network request
  });
};
