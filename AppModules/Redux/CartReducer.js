import {createSlice} from '@reduxjs/toolkit';
const INITIAL_STATE = {
  cart: [],
};

const findProductIndexById = (cart, productId) => {
  return cart.findIndex(item => item.id === productId);
};
const CartReducer = createSlice({
  name: 'CartReducer',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const {id, title, price, thumbnail, images} = action.payload;
      const productIndex = findProductIndexById(state.cart, id);
      if (productIndex !== -1) {
        state.cart[productIndex].quantity += 1;
      } else {
        state.cart.push({
          id,
          title,
          price,
          thumbnail,
          images,
          quantity: 1,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const {id} = action.payload;
      const productIndex = findProductIndexById(state.cart, id);

      if (productIndex !== -1) {
        // Increase quantity
        state.cart[productIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const {id} = action.payload;
      const productIndex = findProductIndexById(state.cart, id);

      if (productIndex !== -1) {
        state.cart[productIndex].quantity -= 1;
        if (state.cart[productIndex].quantity === 0) {
          state.cart.splice(productIndex, 1);
        }
      }
    },
    cleanCart: (state, action) => {
      state.cart = [];
    },
  },
});
export const {addToCart, cleanCart, decreaseQuantity, increaseQuantity} =
  CartReducer.actions;
export default CartReducer.reducer;
