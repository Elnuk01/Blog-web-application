import React, { useEffect, useState } from 'react';
import { getBlogs } from '../services/api';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await getBlogs();
                setBlogs(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Blog List</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog._id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <p>By: {blog.author.first_name} {blog.author.last_name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
