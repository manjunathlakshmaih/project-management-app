import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTeamMember } from "../../services/teamApi";

export const fetchTeamMembers = createAsyncThunk('teams/fetchTeamMembers', async() => {
    const teamMember = await getTeamMember();
    return teamMember.data;
} )
