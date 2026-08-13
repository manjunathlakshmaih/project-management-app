import api from './app';

export const createTeamMember = async (teamData) => {
    const response = await api.post("/team-members/create", teamData);
    return response.data;
}