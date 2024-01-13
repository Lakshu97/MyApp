import {StyleSheet} from 'react-native';
import { MD2Colors } from "react-native-paper";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    backgroundColor:'red'
  },
  price:{
    fontSize: 29,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 8,
    fontWeight: '400',
    color: MD2Colors.black,
  },
  discount:{
    backgroundColor: MD2Colors.blue900,
    color: MD2Colors.white,
    fontSize: 21,
    padding: 3,
    borderRadius: 10,
    marginLeft: 10,
  },
  rating:{
    marginHorizontal: 13,
    fontWeight: '500',
    color: MD2Colors.black,
  }
});
