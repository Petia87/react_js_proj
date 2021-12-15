import React, { useState, useEffect } from 'react';
import BlogList from './BlogList'

const HookState = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Petia Spasiva', body: 'lorem ipsum...', author: 'petia', id: 1 },
        { title: 'Petia Andreeva', body: 'lorem ipsum...', author: 'petia', id: 2 },
        { title: 'Petia Andr', body: 'lorem ipsum...', author: 'iva', id: 3 }
    ]);
    const [name, setName] = useState('petia')
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    useEffect(() => {
        console.log(name);
    }, [name])

    return (
        <div className='container'>
            <BlogList blogs={blogs} title="Blogs title" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === "petia")} title="Petia blogs" />
            <button onClick={() => setName('Ivo')}>Change name</button>
            <p>{name}</p>
        </div>
    );
}

export default HookState;