import {createSlice} from '@reduxjs/toolkit';
const INITIAL_STATE = {

};

const AppReducer = createSlice({
  name: 'HomeReducer',
  initialState: INITIAL_STATE,
  reducers: {
    addStoreList: (state, action) => {

    },
  },
});
export const {addStoreList} = AppReducer.actions;
export default AppReducer.reducer;
