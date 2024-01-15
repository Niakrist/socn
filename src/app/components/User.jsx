import React from "react";
import Bookmark from "./Bookmark";
import Qualities from "./Qualities";
import PropTypes from "prop-types";

const User = ({ user, handleDelete, handleChangeBookmark }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((qualitie) => (
          <Qualities key={qualitie._id} qualitie={qualitie} />
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <Bookmark user={user} handleChangeBookmark={handleChangeBookmark} />
      </td>
      <td>
        <button
          onClick={() => handleDelete(user._id)}
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
};
User.propTypes = {
  user: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleChangeBookmark: PropTypes.func.isRequired
};
export default User;
