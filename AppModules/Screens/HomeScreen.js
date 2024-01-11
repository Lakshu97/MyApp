import React, {useEffect} from 'react';
import {Pressable, View} from 'react-native';
import {MD2Colors, Text} from 'react-native-paper';
import styles from '../Styles/homeStyles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {PRODUCT_URL} from '../Components/Constants';
import {useDispatch, useSelector} from 'react-redux';
import {addProductList} from '../Redux/Reducers';
import reactotron from 'reactotron-react-native';
const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.appReducer.products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(PRODUCT_URL);
        dispatch(addProductList(response.data.products));
        reactotron.log(
          `${response.data.products} and type of == ${typeof response}`,
        );
      } catch (e) {
        console.error(`${e.message()}`);
      }
    };
    fetchProducts();
  }, []);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          navigation.navigate('Detail', {
            id: 3,
          })
        }>
        <Text style={{color: MD2Colors.black}}>Go to Detail Screen</Text>
      </Pressable>
      <Text style={{color: MD2Colors.black}}>HomeScreen</Text>
    </View>
  );
};
export default React.memo(HomeScreen);
