import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {Appbar, Button, Card, MD2Colors, Text} from 'react-native-paper';
import styles from '../Styles/cartStyles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../Components/CartCard';
import {Toast} from 'react-native-toast-notifications';
import showNotification from '../Notification/notifications';
const width = Dimensions.get('window').width;
const getTitles = arr => {
  return arr.map(itm => itm.title);
};
const CartScreen = () => {
  const navigation = useNavigation();
  const [totalAmount, setTotalAmount] = useState(0);
  const cart = useSelector(state => state.cartReducer.cart);
  useEffect(() => {
    return () => {
      //   dispatch(cleanCart());
    };
  }, []);
  useEffect(() => {
    // Calculate total amount when the cart items change
    const newTotalAmount = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    setTotalAmount(newTotalAmount);
  }, [cart]);
  const renderCartItem = ({item}) => <CartItem item={item} />;
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={`Shopping Cart (${cart.length}) items`} />
      </Appbar.Header>
      <View style={styles.container}>
        <FlatList data={cart} renderItem={renderCartItem} />
        <Card style={{backgroundColor: MD2Colors.transparent}}>
          <Card.Content>
            <View style={styles.total}>
              <Text style={styles.textTotal}>SubTotal</Text>
              <Text>${totalAmount}</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.textTotal}>Shipping & Delivery</Text>
              <Text>$2</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.textTotal}>Total</Text>
              <Text>${totalAmount+2}</Text>
            </View>
          </Card.Content>
        </Card>
        <Button
          onPress={() => {
            let titles = JSON.stringify(getTitles(cart));
            Toast.show('Order Placed SuccessFully', {
              type: 'success',
            });
            showNotification({
              title: 'Order Placed SuccessFully',
              body: `Order containing ${titles} has been Placed Successfully`,
            });
          }}
          buttonColor={MD2Colors.blue500}
          textColor={MD2Colors.white}
          style={{marginVertical: 15, bottom: 23, marginHorizontal: 10}}
          mode="contained-tonal">
          Proceed to Checkout
        </Button>
      </View>
    </>
  );
};
export default React.memo(CartScreen);
