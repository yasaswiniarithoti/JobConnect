import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedJobs: [],
};

const savedJobsSlice = createSlice({
  name: "savedJobs",

  initialState,

  reducers: {
    saveJob: (state, action) => {
      const exists = state.savedJobs.some(
        (job) => job.title === action.payload.title
      );

      if (!exists) {
        state.savedJobs.push(action.payload);
      }
    },

    removeSavedJob: (state, action) => {
      state.savedJobs = state.savedJobs.filter(
        (job) => job.title !== action.payload
      );
    },
  },
});

export const { saveJob, removeSavedJob } = savedJobsSlice.actions;

export default savedJobsSlice.reducer;