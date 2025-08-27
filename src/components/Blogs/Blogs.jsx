import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Blog from './blog.jsx';

const Blogs = ({ handleAddBookmark, handleReadingTime }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.error('Error fetching blogs:', err));
    }, []);

    return (
        <div className='lg:w-2/3 md:w-3/4'>
            <h1>All Blogs</h1>
            {
                blogs.map(blog => (
                    <Blog key={blog.id} blog={blog} handleAddBookmark={handleAddBookmark} handleReadingTime={handleReadingTime} />
                ))
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func,
    handleReadingTime: PropTypes.number,
}

export default Blogs;