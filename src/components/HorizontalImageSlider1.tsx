import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {DEVICE_WIDTH} from '../helpers/Dimensions';
const {width: viewportWidth} = Dimensions.get('window');
const ITEM_WIDTH = viewportWidth * 0.8;

const ITEM_SPACING = (DEVICE_WIDTH - ITEM_WIDTH) / 2;
const HorizontalImageSlider1 = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const data = [
    {
      id: 1,
      image:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
    },
    {
      id: 2,
      image:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
    },
    {
      id: 3,
      image:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
    },
    {
      id: 4,
      image:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
    },
    // Add more images as needed
  ];
  const renderItem = ({item}: any) => (
    <View style={styles.slide}>
      <Image source={{uri: item.image}} style={styles.image} />
    </View>
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex === data.length - 1 ? 0 : prevIndex + 1;
        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
        }

        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={{height: 240}}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        snapToAlignment="start"
        decelerationRate="normal"
        initialScrollIndex={1} // Start with the second item
        getItemLayout={(data, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
        snapToInterval={ITEM_WIDTH}
      />
    </View>
  );
};

export default HorizontalImageSlider1;

const styles = StyleSheet.create({
  flatListContainer: {
    // backgroundColor: 'pink',
    paddingHorizontal: ITEM_SPACING,
  },
  slide: {
    width: ITEM_WIDTH,
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
