import React from 'react';
import {Image, StyleSheet, Pressable} from 'react-native';

const CartIcon = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={require('../assets/cart.png')} style={styles.cartIcon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  cartIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default CartIcon;
