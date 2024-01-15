import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ users, renderPhrase }) => {
  return (
    <>
      {users.length > 0
        ? (
          <span className="badge m-1 bg-primary">
            {" "}
            {users.length} {renderPhrase(users.length)} с тобой сегодня
          </span>
        )
        : (
          <span className="badge m-1 bg-danger">Сегодня тусуешь один</span>
        )}
    </>
  );
};
SearchStatus.propTypes = {
  users: PropTypes.array.isRequired,
  renderPhrase: PropTypes.func
};
export default SearchStatus;
