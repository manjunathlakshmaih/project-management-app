import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./taskThunk";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
    .addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    })
    .addCase(fetchTasks.rejected, (state, action) => {
      (state, (loading = false));
      state.error = action.error.message;
    })
  },
});

export default taskSlice.reducer;