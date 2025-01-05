import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;

    return (
        <div className="p-3 bg-white rounded-xl text-left mt-3">
            <h2 className="text-xl font-medium">{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Bookmark;


