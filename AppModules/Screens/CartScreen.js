import React from 'react';
import {View} from 'react-native';
import { Appbar, Text } from "react-native-paper";
import styles from '../Styles/cartStyles';
import { useNavigation } from "@react-navigation/native";
const CartScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Cart" />
      </Appbar.Header>
      <Text>CartScreen</Text>
    </View>
  );
};
export default React.memo(CartScreen);
