// store.js
import { configureStore } from "@reduxjs/toolkit";
import omraReducer from "./omraSlice";
import ferriesReducer from "./ferriesSlice";
import airlinesReducer from "./airlinesSlice";
import hotelsReducer from "./hotelsSlice"
import usersReducer from "./usersSlice"
const store = configureStore({
  reducer: {
    airlines: airlinesReducer,
    omra: omraReducer,
    ferries: ferriesReducer,
    hotels: hotelsReducer,
    users:usersReducer,
  },
  // Add middleware, enhancers, or other configurations if needed
});

export default store;
