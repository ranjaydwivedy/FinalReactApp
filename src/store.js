import { createStore, combineReducers } from "redux";
import { usersReducer } from "./reducers/usersReducer";
import { settingsReducer } from "./reducers/settingsReducer";

const reducers = combineReducers({
  users: usersReducer,
  settings: settingsReducer
});

const store = createStore(reducers);

export { store };
