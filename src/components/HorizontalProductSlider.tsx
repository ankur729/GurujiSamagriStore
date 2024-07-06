import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {DEVICE_WIDTH} from '../helpers/Dimensions';
import {COLORS, FONTFAMILY} from '../theme/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Price from './common/Price';
import AddCartButton from './common/AddCartButton';
import ProductListItem from './common/ProductListItem';

const HorizontalProductSlider = () => {
  const ITEM_WIDTH = DEVICE_WIDTH * 0.38;
  const data = [
    {
      id: 1,
      imageUri:
        'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
      itemUnit: '1 Unit',
      discountPerc: '5',
      title: 'Testing product',
      price: {
        mrp: '2000',
        discountedPrice: '1289',
      },
    },
    {
      id: 2,
      imageUri:
        'https://www.jiomart.com/images/product/original/490008636/pond-s-dreamflower-pink-lily-fragrant-talc-400-g-product-images-o490008636-p490008636-0-202203142130.jpg?im=Resize=(360,360)',
      discountPerc: '5',
      itemUnit: '1 Unit',
      title: 'Testing product is made for home',
      price: {
        mrp: '2000',
        discountedPrice: '1289',
      },
    },
    {
      id: 3,
      imageUri:
        'https://www.jiomart.com/images/product/original/590123952/fogg-dynamic-fragrance-body-spray-150-ml-0-20210105.jpg?im=Resize=(360,360)',
      discountPerc: '5',
      itemUnit: '1 Unit',
      title: 'Testing product is made for home asdf aasdfads ',
      price: {
        mrp: '2000',
        discountedPrice: '1289',
      },
    },
    {
      id: 4,
      imageUri:
        'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/771755ec-2468-497a-97ec-0fd29320cae1.jpg?ts=1714825387',
      discountPerc: '5',
      itemUnit: '1 Unit',
      title: 'Testing product is made for home',
      price: {
        mrp: '2000',
        discountedPrice: '1289',
      },
    },
    {
      id: 5,
      imageUri:
        'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/70c9bfb0-e903-45b1-8cf6-8812422f4aa4.jpg?ts=1716873741',
      discountPerc: '5',
      itemUnit: '1 Unit',
      title: 'Testing product is made for home',
      price: {
        mrp: '2000',
        discountedPrice: '1289',
      },
    },
  ];

  const renderItem = ({item}: any) => {
    return (
      <ProductListItem
        item={item}
        itemWidth={ITEM_WIDTH}
        imageBorder={true}
        itemHeight={responsiveHeight(3) * 10}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerLeft}>Embrace smart living</Text>
        <TouchableOpacity>
          <Text style={styles.headerRight}>see all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="normal"
        />
      </View>
    </View>
  );
};

export default HorizontalProductSlider;

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH,
    height: 300,
    marginVertical: 10,
    // backgroundColor: 'pink',
  },
  header: {
    flexDirection: 'row',
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  headerLeft: {
    color: COLORS.primaryBlack,
    fontFamily: FONTFAMILY.font_bold,
    fontSize: responsiveFontSize(1.8),
  },
  headerRight: {
    color: COLORS.primaryGreenHex,
    fontFamily: FONTFAMILY.font_medium,
    fontSize: responsiveFontSize(1.5),
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 5,
    overflow: 'hidden',
  },
});
