import { Dimensions, StyleSheet } from "react-native";
import { MD2Colors } from "react-native-paper";
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  flatListStyles: {
    width,
    margin: 10,
    flex: 1,
  },
  listheader: {
    marginVertical: 15,
    marginHorizontal: 0,
    flexDirection: 'column',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 0,
    height: height * 0.13,
    alignItems:'center'
  },
  topView:{
    backgroundColor: MD2Colors.blue500,
  },
  searchBar:{
    backgroundColor: MD2Colors.blue700,
    borderColor: MD2Colors.white,
    marginBottom: 16,
    width: width * 0.93,
    marginHorizontal: 10,
  },
  topText:{
    color: MD2Colors.white,
    fontSize: 26,
    padding: 4,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  recommendText:{
    fontSize: 34,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 1,
  }
});
