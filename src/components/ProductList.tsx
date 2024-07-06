import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductListItem from '../components/common/ProductListItem';
import {DEVICE_WIDTH} from '../helpers/Dimensions';
import {COLORS} from '../theme/theme';
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface PropTypes {
  itemHeight?: number | string;
}
const ProductList: React.FC<PropTypes> = ({itemHeight}) => {
  const ITEM_WIDTH = '48%';
  let ITEM_HEIGHT = !itemHeight ? responsiveHeight(3) * 12 : itemHeight;
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
      title: 'Testing product is made for home',
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
    {
      id: 6,
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
    {
      id: 7,
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

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ProductListItem
          item={item}
          itemWidth={ITEM_WIDTH}
          itemHeight={ITEM_HEIGHT}
        />
      )}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    paddingHorizontal: 5,
    backgroundColor: COLORS.secondaryLightGreyHex,
    marginVertical: 5,
    paddingBottom: 100,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // marginVertical: 2,
    // justifyContent: 'space-around',
  },
});
