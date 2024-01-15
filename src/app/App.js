import React, { useState } from "react";
import Users from "./components/Users";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (id) => {
    // setUsers(prev => prev.filter(user => user._id !== id));
    setUsers(users.filter(user => user._id !== id));
  }

  const handleChangeBookmark = (id) => {
    console.log(id)
    const copyUsers = [...users];
    const indexId = users.findIndex(user => user._id === id);
    console.log('indexId', indexId)
    console.log('copyUsers', copyUsers[indexId])
    copyUsers[indexId].bookmark = !copyUsers[indexId].bookmark;
    setUsers(copyUsers)


  }

  return (
    <div>
      <Users users={users} handleDelete={handleDelete} handleChangeBookmark={handleChangeBookmark} />
    </div>
  );
}

export default App;
