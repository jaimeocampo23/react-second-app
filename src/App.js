import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';



function App() {


  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userage) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: username, age: userage, id: Math.random().toString() }];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
