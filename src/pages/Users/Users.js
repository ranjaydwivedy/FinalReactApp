import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import {
  getUsersByPage,
  getSearchString,
  getSearchResults
} from "../../selectors/users";
import { Link } from "react-router-dom";
import { getResultsPerPage } from "../../selectors/settings";
import { UserList } from "../../components/UserList/UserList";
import { connect } from "react-redux";
import { Pagination } from "../../components/Pagination/Pagination";
import { SearchUser } from "../../components/SearchUser/SearchUser";

import "./users.css";

const getPageNumber = props => {
  const queryParams = new URLSearchParams(props.location.search);
  const page = queryParams.get("page");
  return !!page ? page : 1;
};

const mapStateToProps = (store, props) => {
  const resultsPerPage = getResultsPerPage(store);
  const pageNumber = getPageNumber(props);
  const searchString = getSearchString(store);
  return {
    users: getUsersByPage(store, pageNumber, resultsPerPage, searchString),
    resultsPerPage,
    totalUsers: getSearchResults(store).length,
    pageNumber
  };
};

const Users = ({ users, resultsPerPage, totalUsers, pageNumber }) => {
  return (
    <PageLayout>
      <div className="users-heading">
        <h1>Users Page</h1>
        <SearchUser />
      </div>
      <Pagination
        page={pageNumber}
        totalResults={totalUsers}
        resultsPerPage={resultsPerPage}
      />
      {users.length === 0 && totalUsers > 0 ? (
        <div>
          <p>
            There are <strong>{totalUsers}</strong> user(s) found.
          </p>
          <p>You need to go back to the first page to see the results</p>
          <Link to="/users">&lt; Go to page 1</Link>
        </div>
      ) : null}
      <UserList users={users} />
      <Pagination
        page={pageNumber}
        totalResults={totalUsers}
        resultsPerPage={resultsPerPage}
      />
    </PageLayout>
  );
};

export default connect(mapStateToProps)(Users);
