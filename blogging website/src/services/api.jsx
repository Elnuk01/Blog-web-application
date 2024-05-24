import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const signup = (data) => api.post('/auth/signup', data);
export const login = (data) => api.post('/auth/login', data);
export const getBlogs = (params) => api.get('/blogs', { params });
export const getBlogById = (id) => api.get(`/blogs/${id}`);
export const createBlog = (data, token) => api.post('/blogs', data, { headers: { Authorization: `Bearer ${token}` } });
export const updateBlog = (id, data, token) => api.put(`/blogs/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteBlog = (id, token) => api.delete(`/blogs/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const publishBlog = (id, token) => api.put(`/blogs/${id}/publish`, {}, { headers: { Authorization: `Bearer ${token}` } });
export const getUserBlogs = (userId, token) => api.get(`/users/${userId}/blogs`, { headers: { Authorization: `Bearer ${token}` } });
