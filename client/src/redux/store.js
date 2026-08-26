import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task/taskSlice";
import teamReducer from "./teams/TeamSlice";
import projectReducer from "./project/ProjectSlice";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        teamMember: teamReducer,
        project: projectReducer
    }
});