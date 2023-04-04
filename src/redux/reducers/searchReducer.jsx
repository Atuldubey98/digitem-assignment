import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {
    results: [],
    total: 0,
    totalPages: 0,
  },
  loading: false,
  error: "",
};
export const searchSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setResultsSuccess: (state, action) => {
      state.data.results = [...state.data.results, ...action.payload.results];
      state.data.total = action.payload.total;
      state.data.totalPages = action.payload.total_pages;
      state.error = "";
      state.loading = false;
    },
    setResultsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setResultsLoading: (state) => {
      state.loading = true;
    },
  },
});
export const { setResultsError, setResultsSuccess, setResultsLoading } =
  searchSlice.actions;

export default searchSlice.reducer;
