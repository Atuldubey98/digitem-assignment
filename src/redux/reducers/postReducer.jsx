import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
  error: "",
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postFetchSuccess: (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = [...state.posts, ...action.payload];
    },
    postFetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    postFetchLoading: (state) => {
      state.loading = true;
    },
    postFetchReset: (state) => {
      state.posts = [];
      state.loading = false;
      state.error = ""
    },
  },
});
export const {
  postFetchError,
  postFetchSuccess,
  postFetchLoading,
  postFetchReset,
} = postsSlice.actions;

export default postsSlice.reducer;
