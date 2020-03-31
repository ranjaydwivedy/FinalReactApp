export const getUsersByPage = (
  store,
  page,
  resultsPerPage,
  searchString = ""
) => {
  page = page - 1;
  resultsPerPage = resultsPerPage === 0 ? 1 : resultsPerPage;
  const start = page * resultsPerPage;
  const end = start + resultsPerPage;
  const allUserIds =
    searchString.length > 0
      ? getSearchResults(store).slice()
      : getAllUserIds(store).slice();
  const obtainedIds = allUserIds.slice(start, end);
  return obtainedIds.map(userId => {
    return getUser(store, userId);
  });
};

export const getSearchString = store => getUsersStore(store).searchString;

export const getSearchResults = store => {
  const searchString = getSearchString(store).toLocaleLowerCase();
  const users = getAllUsers(store);
  const foundIds = Object.keys(users).filter(userId => {
    const user = users[userId];
    const fullName = user.firstName + " " + user.lastName;
    return fullName.toLocaleLowerCase().indexOf(searchString) > -1;
  });
  return foundIds;
};

export const getUser = (store, id) => getAllUsers(store)[id];

export const getAllUserIds = store => getUsersStore(store).userIds;

export const getAllUsers = store => getUsersStore(store).users;

export const getUsersStore = store => store.users;
