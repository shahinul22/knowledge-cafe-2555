import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, time }) => {
  return (
    <div className="md:w-1/3 p-5 bg-gray-300">
      <div className=" border-green-600 border-solid border-2 p-3 bg-white rounded-3xl">
        <h2>Spent time on read: <span className=" bg-slate-700 text-white p-2 rounded-full">{time}</span>  min</h2>
      </div>
      <div>
        <h2>Bookmarked Blogs: {bookmarks.length}</h2>
      </div>
      <div>
        {bookmarks.map((bookmark, index) => (
          <Bookmark key={index} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  time: PropTypes.number.isRequired,
};

export default Bookmarks;
