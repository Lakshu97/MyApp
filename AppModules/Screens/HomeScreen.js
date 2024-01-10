import React from 'react';
import {Pressable, View} from 'react-native';
import {MD2Colors, Text} from 'react-native-paper';
import styles from '../Styles/homeStyles';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Detail')}>
        <Text style={{color: MD2Colors.black}}>Go to Detail Screen</Text>
      </Pressable>
      <Text style={{color: MD2Colors.black}}>HomeScreen</Text>
    </View>
  );
};
export default React.memo(HomeScreen);
