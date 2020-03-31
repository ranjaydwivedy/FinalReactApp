import * as Actions from "../constants/actionTypes";

const defaultState = {
  userIds: [],
  users: {},
  searchString: ""
};

const loadUsers = (state, userData) => {
  const userIds = [];
  const users = {};
  if (!!userData && !!userData.length > 0) {
    userData.forEach(user => {
      userIds.push(user.id);
      users[user.id] = user;
    });
  }

  return { ...state, userIds, users };
};

const searchUsers = (state, value) => ({
  ...state,
  searchString: value
});

const reducerActions = {
  [Actions.LOAD_USERS]: loadUsers,
  [Actions.SEARCH_USERS]: searchUsers
};

const usersReducer = (state = defaultState, action) => {
  const reducerAction = reducerActions[action.type];
  return !!reducerAction ? reducerAction(state, action.payload) : state;
};

export { usersReducer };
