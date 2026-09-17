import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNewProject, getProject } from "../../services/projectApi";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProject",
  async () => {
    const response = await getProject();
    return response.data;
  },
);

export const addNewProject = createAsyncThunk(
  "projects/registerNewProject",
  async (projectData) => {
    const response = await createNewProject(projectData);
    return response.data;
  },
);
