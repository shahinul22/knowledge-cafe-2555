import './App.css';
import Header from './components/header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);


  const handleAddToBookmarks = (blog) => {
    if (!bookmarks.includes(blog)) {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
      
    }
  };

  const handleAddTime = (id,readingTime, ) => {
    console.log('Adding reading time:', readingTime);
    setTime((prevTime) => prevTime + readingTime);
    const remaingBookmarks = bookmarks.filter(bookmark => bookmark.id!==id);
    setBookmarks(remaingBookmarks);
};




  return (
    <>
      <Header />
      <div className="md:flex gap-5 max-w-7xl mx-auto mt-10">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleAddTime={handleAddTime}
        />
        <Bookmarks bookmarks={bookmarks} time={time} />
      </div>
    </>
  );
}

export default App;
