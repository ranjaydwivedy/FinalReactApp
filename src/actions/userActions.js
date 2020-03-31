import * as Actions from "../constants/actionTypes";

export const loadUsers = users => ({
  type: Actions.LOAD_USERS,
  payload: users
});

export const searchUsers = value => ({
  type: Actions.SEARCH_USERS,
  payload: value
});
