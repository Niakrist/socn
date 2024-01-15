import React from "react";
import PropTypes from "prop-types";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
></link>;

const Bookmark = ({ user, handleChangeBookmark }) => {
  return (
    <button onClick={() => handleChangeBookmark(user._id)}>
      {user.bookmark
        ? (<i className="bi bi-star-fill"></i>)
        : (<i className="bi bi-star"></i>)}
    </button>
  );
};
Bookmark.propTypes = {
  user: PropTypes.object.isRequired,
  handleChangeBookmark: PropTypes.func.isRequired
};
export default Bookmark;
