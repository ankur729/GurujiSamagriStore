import React, {useState, useRef} from 'react';
import {View, Image, FlatList, Dimensions, StyleSheet} from 'react-native';
import {DEVICE_WIDTH} from '../helpers/Dimensions';

const data = [
  {
    id: '1',
    image:
      'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
  },
  {
    id: '2',
    image:
      'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
  },
  {
    id: '3',
    image:
      'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
  },
];
// const data = [
//   {
//     id: '1',
//     image:
//       'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
//     title: 'Item 1',
//   },
//   {
//     id: '2',
//     image:
//       'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
//     title: 'Item 2',
//   },
//   {
//     id: '3',
//     image:
//       'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
//     title: 'Item 3',
//   },
//   // Add more items as needed
// ];

const ITEM_WIDTH = DEVICE_WIDTH * 0.7;
const ITEM_SPACING = (DEVICE_WIDTH - ITEM_WIDTH) / 2;

const renderItem = ({item}: any) => (
  <View style={styles.itemContainer}>
    <Image source={{uri: item.image}} style={styles.image} />
    {/* <Text style={styles.title}>{item.title}</Text> */}
  </View>
);
const CircularSlider = () => {
  const flatListRef = useRef(null);

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={ITEM_WIDTH}
      decelerationRate="fast"
      bounces={false}
      contentContainerStyle={styles.flatListContent}
      style={styles.flatList}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    overflow: 'visible',
  },
  flatListContent: {
    paddingHorizontal: ITEM_SPACING,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default CircularSlider;
