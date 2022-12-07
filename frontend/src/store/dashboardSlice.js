import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
}
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: initialState,
    reducers: {
        increment: (state, action) => {
            console.log("incrementing")
            state.counter = state.counter + action.payload;
        },
        decrement: (state, action) => {
            console.log("dec")
            state.counter = state.counter - action.payload;
        },
        reset: (state) => {
            console.log("reset")
            state.counter = 0;
        }
    }
})

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice;
