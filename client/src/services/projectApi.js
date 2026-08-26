import api from "./app";

export const createNewProject = async (projectData) => {
  const response = await api.post("/register-project/register", projectData);
  return response.data;
};
