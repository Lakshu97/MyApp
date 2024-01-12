import { Dimensions, StyleSheet } from "react-native";
import { MD2Colors } from "react-native-paper";
const height = Dimensions.get('window').height
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  flatListStyles: {},
  listheader: {
    marginVertical: 15,
    marginHorizontal: 0,
    flexDirection: 'column',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 0,
    height: height * 0.13
  },
  topView:{
    backgroundColor: MD2Colors.blue500,
  }
});
