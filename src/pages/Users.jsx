// src/components/Users.js
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Users() {
  const users = useContext(UserContext);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet /> {/* Nested route will render here */}
    </div>
  );
}

export default Users;
