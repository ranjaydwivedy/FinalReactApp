import React from "react";
import "./user-list.css";
import { Link } from "react-router-dom";

const UserList = props => {
  if (!!props.users) {
    if (props.users.length === 0) {
      return null;
    }

    return (
      <div className="user-list">
        {props.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }

  return null;
};

const User = ({ user }) => {
  const name = `${user.firstName} ${user.lastName}`;
  return (
    <Link to={`/users/${user.id}`} className={"user"}>
      <div className="avatar">
        <img src={user.avatar} alt={name} />
      </div>
      <div>{name}</div>
    </Link>
  );
};

export { UserList };
