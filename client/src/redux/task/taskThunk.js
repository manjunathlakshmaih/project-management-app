import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks } from "../../services/taskApi";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async() => {
    const response = await getTasks();
    return response.data.data;
})