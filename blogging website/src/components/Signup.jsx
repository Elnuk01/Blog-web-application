import React, { useState } from 'react';
import { signup } from '../services/api';

const Signup = () => {
    const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(formData);
            alert('User created successfully');
        } catch (error) {
            console.error(error);
            alert('Error creating user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
