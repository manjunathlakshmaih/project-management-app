import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTeamMember, createTeamMember } from "../../services/teamApi";

export const fetchTeamMembers = createAsyncThunk(
  "teams/fetchTeamMembers",
  async () => {
    const response = await getTeamMember();
    return response.data;
  },
);

export const addTeamMember = createAsyncThunk(
  "teams/addTeamMember",
  async (teamMemberData) => {
    const response = await createTeamMember(teamMemberData);
    return response.data;
  },
);
