import React from 'react';
import PropTypes from 'prop-types';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';

const Blog = ({ blog, handleAddToBookmarks, handleAddTime }) => {
  const { id, title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;

  return (
    <div className="card bg-base-400 w-full shadow-gray-500 shadow-xl space-y-3 p-4 mb-10">
      <figure>
        <img
          className="w-full max-h-[450px] rounded-3xl"
          src={cover}
          alt={`Cover picture of the title ${title}`}
        />
      </figure>
      <div className="flex justify-between items-center mx-4">
        <div id="profile-img" className="flex items-center gap-3">
          <img className="w-16 h-16 rounded-full" src={author_img} alt={author} />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <h4 className="text-xs">{posted_date}</h4>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h4>{reading_time} min read</h4>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="hover:text-violet-700"
          >
            <FontAwesomeIcon icon={farBookmark} />
          </button>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p>
          {hashtags.map((hash, idx) => (
            <span key={idx} className="text-blue-500">#{hash} </span>
          ))}
        </p>
        <button
          onClick={() => handleAddTime(id,reading_time)}
          className="rounded-3xl hover:bg-violet-800 text-right w-28 p-2 bg-gray-500 text-white mt-4"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    reading_time: PropTypes.number.isRequired, // Fixed to number
    author: PropTypes.string.isRequired,
    author_img: PropTypes.string.isRequired,
    posted_date: PropTypes.string.isRequired,
    hashtags: PropTypes.arrayOf(PropTypes.string).isRequired, // Added hashtags validation
  }).isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired, // Marked as required
  handleAddTime: PropTypes.func.isRequired, // Marked as required
};

export default Blog;
