import PropTypes
    from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog);
    return (
        <div>
            <div key={blog.id} className="mb-6 p-4 border rounded shadow cursor-pointer hover:shadow-lg transition-shadow">
                <img src={blog.cover} alt='blog_img' className="w-full h-48 object-cover mb-4 rounded" />
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-700">{blog.description}</p>
                <div className="mt-2">
                    {blog.hashtags.map((tag, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mr-2">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;