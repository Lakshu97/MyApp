import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from '../Styles/cartStyles';
const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CartScreen</Text>
    </View>
  );
};
export default React.memo(CartScreen);
