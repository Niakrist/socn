import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import User from "./User";
import SearchStatus from "./SearchStatus";


const Users = ( {handleDelete, users, handleChangeBookmark }) => {

  const renderPhrase = (number) => {
    if (number > 4 && number < 15) return "Человек тусанёт";
    const lastNum = Number(number.toString().slice(-1));
    if ([2, 3, 4].includes(lastNum)) return "Человека тусанут";

    return "Человек тусанёт";
  }
  return (
    <>
      {<SearchStatus users={users} renderPhrase={renderPhrase}/>}

      {users.length > 0 &&
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Закладка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <User key={user._id} user={user} handleDelete={handleDelete} handleChangeBookmark={handleChangeBookmark} />
            ))}
          </tbody>
        </table>}
    </>
  );
};
export default Users;