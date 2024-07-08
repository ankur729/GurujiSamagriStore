import React from 'react';
import {View, Image, FlatList, StyleSheet, Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const itemWidth = DEVICE_WIDTH * 0.8;
const spacing = (DEVICE_WIDTH - itemWidth) / 2;

const data = [
  {
    id: 1,
    title: 'Test 1',
    image:
      'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
  },
  {
    id: 2,
    title: 'Test 2',
    image:
      'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
  },
  {
    id: 3,
    title: 'Test 3',
    image:
      'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
  },
  {
    id: 4,
    title: 'Test 4',
    image:
      'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
  },
];

const CarouselHorizontal = () => {
  const renderItem = ({item}: any) => (
    <View style={styles.slide}>
      <Image source={{uri: item.image}} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={itemWidth}
      getItemLayout={(data, index) => ({
        length: itemWidth,
        offset: itemWidth * index,
        index,
      })}
      initialScrollIndex={1} // Start with the second item
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: spacing,
  },
  slide: {
    width: itemWidth,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default CarouselHorizontal;
