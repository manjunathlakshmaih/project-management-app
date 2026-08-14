import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task/taskSlice";
import TeamReducer from "./teams/TeamSlice"

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        teamMember: TeamReducer,
    }
});