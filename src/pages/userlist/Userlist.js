import React, { useState, useEffect } from "react";
import './userlist.css';


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <>
    <table className="userlist">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.email}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {users.length} users
    </>
  );
};

export default UserList;