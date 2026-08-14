import { createSlice } from "@reduxjs/toolkit";
import { fetchTeamMembers } from "../teams/TeamThunk";

const initialState = {
  teams: [],
  loading: false,
  error: null,
};

const TeamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamMembers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeamMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = action.payload;
      })
      .addCase(fetchTeamMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default TeamSlice.reducer;
