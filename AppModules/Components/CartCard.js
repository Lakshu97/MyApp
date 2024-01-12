import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Card, Chip, IconButton, MD2Colors} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {increaseQuantity, decreaseQuantity} from '../Redux/CartReducer'; // Adjust the path accordingly

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity({id: item.id}));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity({id: item.id}));
  };

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <View style={styles.quantitySection}>
          <Chip
            size={20}
            onPress={handleIncrease}
            color={MD2Colors.green500}
            mode={'outlined'}>
            +
          </Chip>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <Chip
            size={20}
            onPress={handleDecrease}
            color={MD2Colors.red500}
            mode={'outlined'}>
            -
          </Chip>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 60,
    height: 60,
    marginRight: 10,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: MD2Colors.grey50,
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  quantity: {
    marginHorizontal: 7,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartItem;
