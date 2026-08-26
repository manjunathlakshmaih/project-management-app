import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNewProject } from "../../services/projectApi";

export const addNewProject = createAsyncThunk (
    "projects/registerNewProject",
    async (projectData) => {
        const response = await createNewProject(projectData);
        return response.data;
    }
) 