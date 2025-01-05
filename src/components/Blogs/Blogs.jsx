// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from './../Blog/Blog';
import PropTypes from "prop-types";

const Blogs = ( {handleAddToBookmarks, handleAddTime} ) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[]);

    return (
        <div className="w-2/3">
            <h2 className="text-2xl text-center  font-bold ">Blogs : {blogs.length} </h2>
            {
                blogs.map(blog => <Blog 
                key={blog.id} 
                handleAddToBookmarks={handleAddToBookmarks}
                handleAddTime={handleAddTime}
                blog={blog}></Blog> )
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func,
    handleAddTime: PropTypes.func, // Add the missing comma here
};


export default Blogs;