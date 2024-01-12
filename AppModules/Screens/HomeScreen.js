import React, {useCallback, useEffect} from 'react';
import {Dimensions, FlatList, Pressable, View} from 'react-native';
import {
  ActivityIndicator,
  BottomNavigation,
  MD2Colors,
  Searchbar,
  Text,
} from 'react-native-paper';
import styles from '../Styles/homeStyles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {PRODUCT_URL} from '../Components/Constants';
import {useDispatch, useSelector} from 'react-redux';
import {addProductList} from '../Redux/Reducers';
import reactotron from 'reactotron-react-native';
import ProductCard from '../Components/ProductCard';
import {addToCart} from '../Redux/CartReducer';
import {Toast, useToast} from 'react-native-toast-notifications';
import CartIcon from '../Components/CartIcon';
const width = Dimensions.get('window').width;
const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState('');
  const products = useSelector(state => state.appReducer.products);
  const toast = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(PRODUCT_URL);
        dispatch(addProductList(response.data.products));
      } catch (e) {
        console.error(`${e.message()}`);
      } finally {
      }
    };
    fetchProducts();
  }, [dispatch]);
  const renderItem = ({item}) => (
    <ProductCard
      image={item.thumbnail}
      title={item.title}
      price={item.price}
      onFavoritePress={() =>
        toast.show('Added to Favorites', {
          type: 'danger',
        })
      }
      onAddToCartPress={() => {
        dispatch(addToCart(item));

        toast.show(`${item.title} Added to Cart`, {
          type: 'success',
          duration: 1400,
          animationType: 'zoom-in',
        });
        setTimeout(() => {
          navigation.navigate('Cart');
        }, 1200);
      }}
      onPress={() =>
        navigation.navigate('Detail', {
          id: item.id,
        })
      }
    />
  );
  const ListHeaderComponent = useCallback(
    () => (
      <Text
        style={{
          fontSize: 34,
          marginHorizontal: 15,
          marginVertical: 10,
          padding: 1,
        }}>
        Recommended Products
      </Text>
    ),
    [],
  );
  return (
    <View style={styles.container}>
      <View style={styles.listheader}>
        <View style={styles.topView}>
          <View style={styles.topHeader}>
            <Text
              style={{
                color: MD2Colors.white,
                fontSize: 26,
                padding: 4,
                marginVertical: 15,
                marginHorizontal: 5,
              }}>
              Hey, Lakshu
            </Text>
            <CartIcon onPress={() => navigation.navigate('Cart')} />
          </View>
          <Searchbar
            placeholder="Search Products or Store"
            placeholderTextColor={MD2Colors.white}
            onChangeText={txt => setSearchQuery(txt)}
            value={searchQuery}
            elevation={4}
            style={{
              backgroundColor: MD2Colors.blue700,
              borderColor: MD2Colors.white,
              marginBottom: 16,
              width: width * 0.93,
              marginHorizontal: 10,
            }}
          />
        </View>
      </View>
      <FlatList
        style={{
          width: width,
          marginVertical: 10,
          marginHorizontal: 10,
          flex: 1,
        }}
        data={products}
        numColumns={2}
        key={item => item.id}
        renderItem={renderItem}
        initialNumToRender={15}
        ListEmptyComponent={() => (
          <ActivityIndicator
            animating={true}
            color={MD2Colors.blue700}
            size={'large'}
          />
        )}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};
export default React.memo(HomeScreen);
