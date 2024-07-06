import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {DEVICE_WIDTH} from '../helpers/Dimensions';
import {COLORS, FONTFAMILY} from '../theme/theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SearchBar';
import SearchBar2 from '../components/SearchBar2';
import HorizontalImageSlider1 from '../components/HorizontalImageSlider1';
import HomeTop6Category from '../components/HomeTop6Category';
import HorizontalProductSlider from '../components/HorizontalProductSlider';
import ProductList from '../components/ProductList';
import CustomBottomSheet from '../components/CustomBottomSheet';
import ProductVariant from '../components/ProductVariant';
import CircularSlider from '../components/CircularSlider';

const Home = () => {
  const width = DEVICE_WIDTH;
  return (
    <View style={styles.container}>
      <HomeHeader />
      <SearchBar2 />
      {/* <CircularSlider /> */}
      <HorizontalImageSlider1 />
      <HorizontalProductSlider />

      {/* <HomeTop6Category /> */}
      {/* <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        mode="parallax"
        pagingEnabled={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
          </View>
        )}
      /> */}
      {/* <ProductList /> */}
      {/* <ProductVariant /> */}
      {/* <CustomBottomSheet /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
  },
});
export default Home;
