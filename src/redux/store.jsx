import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
import searchReducer from "./reducers/searchReducer";
const rootReducer = combineReducers({
  posts: postReducer,
  results : searchReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
