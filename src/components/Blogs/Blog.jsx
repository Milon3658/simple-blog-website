import PropTypes
    from 'prop-types';
import { useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddBookmark, removeBookmarks, markAsRead }) => {
    const [clicked, setClicked] = useState(false);

    const buttonClicked = isClicked => {
        setClicked(isClicked);
    }
    return (
        <div>
            <div key={blog.id} className="mb-6 p-4 border rounded shadow cursor-pointer hover:shadow-lg transition-shadow">
                <img src={blog.cover} alt='blog_img' className="w-full lg:h-[400px] h-48 object-cover mb-4 rounded" />
                <div className='flex flex-row justify-between mb-4'>
                    <div className='flex flex-row items-center'>
                        <img src={blog.author_img} alt="" className='h-[40px]' />
                        <div className='flex flex-col '>
                            <span className='ml-2 font-semibold'>{blog.author}</span>
                            <span className='ml-2 text-gray-500'>{blog.posted_date}</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <span className='ml-2 text-gray-500 mr-2'>{blog.reading_time} min read</span>
                        {clicked == false ? (
                            <button onClick={() => { handleAddBookmark(blog); buttonClicked(true) }}>
                                <CiBookmark />
                            </button>
                        ) : (
                            <button onClick={() => { removeBookmarks(blog.id); buttonClicked(false) }}>
                                <FaBookmark />
                            </button>
                        )}

                    </div>
                </div>
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-700">{blog.description}</p>
                <div className="mt-2">
                    {blog.hashtags.map((tag, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mr-2">
                            #{tag}
                        </span>
                    ))}
                </div>
                <button onClick={() => markAsRead(blog.id, blog.reading_time)} className='rounded shadow mt-2 p-2 text-sm cursor-pointer font-bold'><span className='text-purple-500 '>Mark as read</span></button>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleReadingTime: PropTypes.number,
    removeBookmarks: PropTypes.func,
    markAsRead: PropTypes.func
}

export default Blog;