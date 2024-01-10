import React from 'react'
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from '../Styles/homeStyles'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}
export default React.memo(HomeScreen)
