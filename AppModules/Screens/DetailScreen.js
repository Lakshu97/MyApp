import React from 'react'
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from '../Styles/detailStyles';
const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
    </View>
  );
};
export default React.memo(DetailScreen);
