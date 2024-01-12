import React, {useState} from 'react';
import {View, Image, StyleSheet, Dimensions, FlatList} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ImageCarousel = ({images}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const renderCarouselItem = ({item}) => (
    <View style={styles.carouselItem}>
      <Image source={{uri: item}} style={styles.image} />
    </View>
  );
  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {images?.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            index === activeSlide && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={renderCarouselItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const index = Math.floor(offsetX / width);
          setActiveSlide(index);
        }}
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    width: width * 0.99,
    height: height / 3, // Adjust the height as needed
    marginHorizontal: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue', // Change to your active color
  },
});

export default ImageCarousel;
