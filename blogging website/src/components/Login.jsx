import React, { useState } from 'react';
import { login } from '../services/api';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData);
            onLogin(response.data.token);
        } catch (error) {
            console.error(error);
            alert('Error logging in');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Log In</button>
        </form>
    );
};

export default Login;
