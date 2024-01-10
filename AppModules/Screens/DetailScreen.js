import React from 'react';
import { Pressable, View } from "react-native";
import {Text, Appbar} from 'react-native-paper';
import styles from '../Styles/detailStyles';
import {useNavigation} from '@react-navigation/native';
const DetailScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Product Detail" />
      </Appbar.Header>
      <View style={styles.body}>
        <Text>DetailScreen</Text>
        <Text>DetailScreen</Text>
        <Pressable onPress={() => navigation.navigate('Cart')}>
          <Text>Go to Cart Screen</Text>

        </Pressable>
      </View>
    </View>
  );
};
export default React.memo(DetailScreen);
