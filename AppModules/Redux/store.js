import {configureStore} from '@reduxjs/toolkit';
import AppReducer from './Reducers';
import AppReactotron from '../DevConfig/Reactotron';
import CartReducer from './CartReducer';
const rootReducer = {
  appReducer: AppReducer,
  cartReducer: CartReducer,
};
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}),
  devTools: true,
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat(AppReactotron.createEnhancer()),
});
export default store;
