import React, {useEffect} from 'react';
import {Pressable, View} from 'react-native';
import {Text, Appbar} from 'react-native-paper';
import styles from '../Styles/detailStyles';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import {PRODUCT_URL} from '../Components/Constants';
import {useDispatch, useSelector} from 'react-redux';
import {addSelectedProduct} from '../Redux/Reducers';
const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    state => state.appReducer.selectedProduct,
  );
  useEffect(() => {
    const fetchProductById = async id => {
      try {
        const response = await axios.get(`${PRODUCT_URL}/${id}`);
        dispatch(addSelectedProduct(response.data));
      } catch (e) {
        console.error(`${e.message()}`);
      }
    };
    fetchProductById(route.params.id);
  }, []);
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
