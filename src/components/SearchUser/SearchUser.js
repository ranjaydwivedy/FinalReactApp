import React from "react";
import { connect } from "react-redux";
import { getSearchString } from "../../selectors/users";
import { searchUsers } from "../../actions/userActions";

import "./search-users.css";

const mapStateToProps = store => ({
  searchString: getSearchString(store)
});

const mapDispatchToProps = dispatch => ({
  searchUser: value => dispatch(searchUsers(value))
});

const SearchUserComponent = props => (
  <input
    className="search-users"
    type="text"
    onChange={e => props.searchUser(e.target.value)}
    value={props.searchString}
    placeholder={`Type in name to search users...`}
  />
);

const SearchUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchUserComponent);

export { SearchUser };
