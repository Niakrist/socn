import React from "react";

const Bookmark = ({ user, handleChangeBookmark }) => {
  
  return (
    <button onClick={() => handleChangeBookmark(user._id)}>{user.bookmark ? "+" : "-" }</button>
  );
};
export default Bookmark;