import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Card, MD2Colors, Chip} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const ProductCard = ({
  image,
  title,
  price,
  onFavoritePress,
  onAddToCartPress,
  onPress,
}) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <MaterialCommunityIcons
        name="heart-outline"
        size={24}
        color={MD2Colors.redA400}
        style={styles.heartIcon}
        onPress={onFavoritePress}
      />
      <Card.Cover style={{padding: 5}} source={{uri: image}} />
      <Card.Title
        title={title}
        subtitle={`$ ${price}`}
        right={props => (
          <Chip
            style={{marginRight: 8, backgroundColor: MD2Colors.blue700}}
            textStyle={{color: MD2Colors.white, fontSize: 15}}
            onPress={onAddToCartPress}>
            +
          </Chip>
        )}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 10,
    width: width * 0.45,
    height: height * 0.35,
    position: 'relative',
  },
  cardActions: {
    justifyContent: 'space-between',
  },
  heartIcon: {
    position: 'absolute',
    top: 8,
    left: 7,
    zIndex: 1, // Ensure the heart icon is on top
    backgroundColor: MD2Colors.transparent,
  },
});

export default React.memo(ProductCard);
