import { configureStore } from "@reduxjs/toolkit";
import AppReducer from './Reducers'
const rootReducer = {
  appReducer: AppReducer
};
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}),
});
export default store;
