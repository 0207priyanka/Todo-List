import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});

export const getAllTasks = () => apiClient.get('/tasks');
export const createTask = (task) => apiClient.post('/tasks', task);
export const deleteTask = (id) => apiClient.delete(`/tasks/${id}`);
export const updateTask = (id, updatedTask) => apiClient.put(`/tasks/${id}`, updatedTask);