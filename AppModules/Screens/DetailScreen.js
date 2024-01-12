import React, {useEffect} from 'react';
import {Dimensions, Pressable, View} from 'react-native';
import {
  Text,
  Appbar,
  MD2Colors,
  Button,
  ActivityIndicator,
} from 'react-native-paper';
import styles from '../Styles/detailStyles';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import {PRODUCT_URL} from '../Components/Constants';
import {useDispatch, useSelector} from 'react-redux';
import {addSelectedProduct, cleanSelectProduct} from '../Redux/Reducers';
import ImageCarousel from '../Components/ImageCorousel';
import {addToCart} from '../Redux/CartReducer';
import {Toast} from 'react-native-toast-notifications';
import showNotification from '../Notification/notifications';
const width = Dimensions.get('window').width;
const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const selectedProduct = useSelector(
    state => state.appReducer.selectedProduct,
  );
  useEffect(() => {
    const fetchProductById = async id => {
      try {
        setLoading(true);
        const response = await axios.get(`${PRODUCT_URL}/${id}`);
        dispatch(addSelectedProduct(response.data));
      } catch (e) {
        console.error(`${e.message()}`);
      } finally {
        setLoading(false);
      }
    };
    fetchProductById(route.params.id);
    return () => {
      dispatch(cleanSelectProduct());
    };
  }, [dispatch, route.params.id]);
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Product Detail" />
      </Appbar.Header>
      {loading ? (
        <ActivityIndicator
          animating={true}
          color={MD2Colors.blue900}
          size={'large'}
        />
      ) : (
        <View>
          <Text
            style={{
              fontSize: 32,
              padding: 5,
              marginVertical: 8,
              marginHorizontal: 8,
              fontWeight: 'bold',
              color: MD2Colors.black,
            }}>
            {selectedProduct?.title}
          </Text>
          <ImageCarousel images={selectedProduct.images} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 29,
                padding: 5,
                marginVertical: 5,
                marginHorizontal: 8,
                fontWeight: '400',
                color: MD2Colors.black,
              }}>
              $ {selectedProduct?.price}
            </Text>
            <Text
              style={{
                backgroundColor: MD2Colors.blue900,
                color: MD2Colors.white,
                fontSize: 21,
                padding: 3,
                borderRadius: 10,
                marginLeft: 10,
              }}>
              {Math.ceil(selectedProduct.discountPercentage)}% OFF
            </Text>
          </View>
          <Text
            style={{
              marginHorizontal: 13,
              fontWeight: '500',
              color: MD2Colors.black,
            }}>
            Rating : {selectedProduct.rating}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginHorizontal: 2,
              marginVertical: 15,
            }}>
            <Button
              mode={'outlined'}
              onPress={() => {
                dispatch(addToCart(selectedProduct));
                Toast.show(`${selectedProduct.title} Added to Cart`, {
                  type: 'success',
                  duration: 3500,
                  animationType: 'slide-in',
                });
                setTimeout(() => {
                  navigation.navigate('Cart');
                }, 1200);
              }}
              style={{
                borderColor: MD2Colors.black,
                borderRadius: 10,
                width: width * 0.4,
              }}
              buttonColor={MD2Colors.transparent}
              textColor={MD2Colors.blue800}>
              Add to Cart
            </Button>
            <Button
              mode={'outlined'}
              onPress={async () => {
                await showNotification({
                  title: 'Item Brought Successfully',
                  body: `Your Order Containing ${selectedProduct.title} has been placed successfully`,
                });
              }}
              style={{borderRadius: 10, width: width * 0.4}}
              buttonColor={MD2Colors.blue900}
              textColor={MD2Colors.white}>
              Buy Now
            </Button>
          </View>
          <Text
            style={{
              fontSize: 18,
              marginHorizontal: 15,
              fontWeight: '300',
              color: MD2Colors.black,
              marginVertical: 10,
            }}>
            Details
          </Text>
          <Text
            variant="bodyLarge"
            style={{
              fontSize: 18,
              marginHorizontal: 15,
              fontWeight: '200',
              color: MD2Colors.black,
              backgroundColor: MD2Colors.white,
              marginVertical: 10,
              padding: 5,
              borderColor: MD2Colors.black,
              borderWidth: 0.17,
              borderRadius: 10,
            }}
            numberOfLines={5}>
            {selectedProduct?.description}
          </Text>
        </View>
      )}
    </>
  );
};
export default React.memo(DetailScreen);
