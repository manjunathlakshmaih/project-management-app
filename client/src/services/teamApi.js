import api from './app';

export const createTeamMember = async (teamData) => {
    const response = await api.post("/team-members/create", teamData);
    return response.data;
}

export const getTeamMember = async () => {
    const response = await api.get("/team-members/get-team-data");
    return response;
}