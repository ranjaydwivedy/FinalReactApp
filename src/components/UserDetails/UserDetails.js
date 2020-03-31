import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../selectors/users";

import "./user-details.css";

const mapStateToProps = (store, props) => {
  return {
    user: getUser(store, props.userId)
  };
};

const UserDetailsComponent = ({ user, goBackFn }) => {
  if (!user) {
    return (
      <>
        <h1>User Not Found</h1>
        <p>Sorry, the user id provided was not a valid id</p>
        <Link to="/users">&lt;&lt; Click here to back to the users list</Link>
      </>
    );
  }

  return (
    <div className="user-details">
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <div className="avatar">
        <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
      </div>
      <div className="gender">Gender: {user.gender}</div>
      <div className="email">Email: {user.email}</div>
      <div className="phone">Phone: {user.phone}</div>
      <button className="go-back" onClick={goBackFn}>
        &lt;&lt; Go Back{" "}
      </button>
    </div>
  );
};

// {"id":1,"firstName":"Benedicto","lastName":"Scard","email":"bscard0@addtoany.com","gender":"Male","avatar":"https://robohash.org/architectoitaquevoluptatem.png?size=50x50&set=set1","phone":"874-440-6559"}

const UserDetails = connect(mapStateToProps)(UserDetailsComponent);

export { UserDetails };
