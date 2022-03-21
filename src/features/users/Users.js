import React from "react";
// add any needed imports here
import {useSelector} from "react-redux";

function Users() {
  //read from the Redux store
  const users = useSelector((state) => state.users);
  const userCount = useSelector((state) => state.users.length);

  return (
    <div>
      <ul>
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
        {users.map((user) => (
          <li key={user.username}>{user.username}</li>
        ))}
      </ul>
      Total Users: {userCount}
    </div>
  );
}

export default Users;
