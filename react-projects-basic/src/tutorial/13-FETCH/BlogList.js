import React from 'react';
const BlogList = ({blogs,title,handleDelete}) => {
       return (
        <div className="container">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={()=>handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
    )
}
export default BlogList;