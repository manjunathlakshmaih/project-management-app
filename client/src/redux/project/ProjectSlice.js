import { createSlice } from "@reduxjs/toolkit";
import { addNewProject } from "./projectThunk";

const initialState = {
  project: [],
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      //post
      .addCase(addNewProject.pending, (state) => {
        state.loading = false;
      })
      .addCase(addNewProject.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
      })
      .addCase(addNewProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default projectSlice.reducer;