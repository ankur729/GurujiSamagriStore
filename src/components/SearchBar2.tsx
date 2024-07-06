import {
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  Alert,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CustomIcon, {IconSetKey} from '../helpers/CustomIcon';

import {COLORS, FONTFAMILY} from '../theme/theme';
import {DEVICE_WIDTH} from '../helpers/Dimensions';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const {height} = Dimensions.get('window');
const ITEM_HEIGHT = responsiveHeight(1) * 4.5; // Adjust this value to change the item height
const SearchBar2 = () => {
  const placeholderData: any = [
    {
      id: '1',
      title: '"guruji brancelet1"',
    },
    {
      id: '2',
      title: '"jap mala"',
    },
    {
      id: '3',
      title: '"photo frame"',
    },
    {
      id: '4',
      title: '"guruji swaroop"',
    },
  ];
  const flatListRef = useRef<FlatList<{id: string; title: string}>>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const data = Array.from({length: 10}).map((_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`,
  }));

  const handleScrollEnd = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    setCurrentIndex(index);
  };

  const renderItem = ({item}: any) => (
    <View style={[styles.itemContainer]}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
  // Step 2: Create a function to start the animation

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex =
          prevIndex + 1 < placeholderData.length ? prevIndex + 1 : 0;
        nextIndex !== 0
          ? flatListRef.current?.scrollToIndex({
              animated: true,
              index: nextIndex,
            })
          : flatListRef.current?.scrollToIndex({
              animated: false,
              index: nextIndex,
            });
        return nextIndex;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchIconWrapper}>
        <CustomIcon
          type={IconSetKey.Octicons}
          name="search"
          size={responsiveWidth(6)}
          style={styles.searchIcon}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: DEVICE_WIDTH,
        }}>
        <Text style={styles.txtSearchFor}>Search for</Text>
        <FlatList
          ref={flatListRef}
          data={placeholderData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          snapToInterval={20}
          decelerationRate="normal"
          showsVerticalScrollIndicator={false}
          onMomentumScrollEnd={handleScrollEnd}
        />
      </View>
      {/* <Button title="Move Text Up" onPress={moveTextUp} /> */}
    </View>
  );
};

export default SearchBar2;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveWidth(2),
    borderRadius: responsiveWidth(3),
    backgroundColor: COLORS.secondaryLightGreyHex,
    marginHorizontal: 10,
  },
  searchIconWrapper: {
    width: responsiveWidth(15),
    //    height: '100%',
  },
  txtSearchFor: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTFAMILY.font_bold,
    fontSize: responsiveFontSize(1.7),
  },
  inputContainer: {
    flexGrow: 1,
    // backgroundColor: 'red',
    flexDirection: 'row',
    //overflow: 'hidden',
  },
  searchIcon: {
    alignSelf: 'center',
    color: COLORS.textHex,
    fontSize: responsiveWidth(6.2),
  },
  itemContainer: {
    //backgroundColor: 'pink',
    justifyContent: 'center',
    height: ITEM_HEIGHT,
  },
  itemText: {
    marginLeft: 5,
    fontFamily: FONTFAMILY.font_bold,
    fontSize: responsiveFontSize(1.7),
  },
});
