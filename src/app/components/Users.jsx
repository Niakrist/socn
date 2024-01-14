import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import api from "../api";

const Users = () => {

  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (id) => {
    // setUsers(prev => prev.filter(user => user._id !== id));
    setUsers(users.filter(user => user._id !== id));
  }

  const renderPhrase = (number) => {
    if (number > 4 && number < 15) return "Человек тусанёт";
    const lastNum = Number(number.toString().slice(-1));
    if ([2, 3, 4].includes(lastNum)) return "Человека тусанут";

    return "Человек тусанёт";
  }
  return (
    <>
      {users.length > 0
        ? <span className="badge m-1 bg-primary"> {users.length} {renderPhrase(users.length)} с тобой сегодня</span>
        : <span className="badge m-1 bg-danger">Сегодня тусуешь один</span>}

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
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.qualities.map(qualitie => <span key={qualitie._id} className={`badge m-1 bg-${qualitie.color}`}>{qualitie.name}</span>)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>{user.nabookmarke}+/-</td>
                <td><button onClick={() => handleDelete(user._id)} className="btn btn-danger">delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>}
    </>
  );
};
export default Users;