import {createSlice} from '@reduxjs/toolkit';
const INITIAL_STATE = {
  products: [],
  selectedProduct: {},
};

const AppReducer = createSlice({
  name: 'Reducer',
  initialState: INITIAL_STATE,
  reducers: {
    addProductList: (state, action) => {
      state.products = action.payload;
    },
    addSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});
export const {addProductList, addSelectedProduct} = AppReducer.actions;
export default AppReducer.reducer;
