import api from "./app";

export const getProject = async () => {
  const response = await api.get("/projects/project-data");
  return response;
};

export const createNewProject = async (projectData) => {
  const response = await api.post("/register-project/register", projectData);
  return response.data;
};
