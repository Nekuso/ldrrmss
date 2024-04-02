import { configureStore } from "@reduxjs/toolkit";
import currentEmployeeReducer from "./slices/employeeSlice";
import branchesReducer from "./slices/branchesSlice";
import rolesReducer from "./slices/rolesSlice";

export const store = configureStore({
  reducer: {
    currentEmployee: currentEmployeeReducer,
    branches: branchesReducer,
    roles: rolesReducer,
  },
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
