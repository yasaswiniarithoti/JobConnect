import { configureStore } from "@reduxjs/toolkit";
import savedJobsReducer from "./slices/savedJobsSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({

  reducer: {

    savedJobs: savedJobsReducer,

    auth: authReducer,

  },

});

export default store;