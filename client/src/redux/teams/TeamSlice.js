import { createSlice } from "@reduxjs/toolkit";
import { fetchTeamMembers, addTeamMember } from "../teams/TeamThunk";

const initialState = {
  teams: [],
  count: [],
  loading: false,
  error: null,
};

const TeamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
    //Get
      .addCase(fetchTeamMembers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeamMembers.fulfilled, (state, action) => {
        console.log("payload", action.payload);
        state.loading = false;
        state.teams = action.payload.data;
        state.count = action.payload.count
      })
      .addCase(fetchTeamMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //Post
      .addCase(addTeamMember.pending, (state) => {
        state.loading = true
      })
      .addCase(addTeamMember.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = action.payload;
      })
      .addCase(addTeamMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default TeamSlice.reducer;
