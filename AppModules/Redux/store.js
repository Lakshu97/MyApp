import {configureStore} from '@reduxjs/toolkit';
import AppReducer from './Reducers';
import AppReactotron from '../DevConfig/Reactotron';
const rootReducer = {
  appReducer: AppReducer,
};
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}),
  devTools: true,
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat(AppReactotron.createEnhancer()),
  //enhancers: [AppReactotron.createEnhancer()],
});
export default store;
