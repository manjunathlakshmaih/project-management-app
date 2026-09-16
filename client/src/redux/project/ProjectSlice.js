import { createSlice } from "@reduxjs/toolkit";
import { addNewProject, fetchProjects } from "./ProjectThunk";

const initialState = {
  project: [],
  projectCount: [],
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      //get
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
        state.count = action.payload.projectCount;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //post
      .addCase(addNewProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewProject.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
      })
      .addCase(addNewProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
