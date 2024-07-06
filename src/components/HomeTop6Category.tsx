import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {DEVICE_WIDTH} from '../helpers/Dimensions';
import {COLORS, FONTFAMILY} from '../theme/theme';
const HomeTop6Category = () => {
  const data = [
    {
      id: 1,
      bgImg: require('../assets/images/yellow-background.jpg'),
      catImg:
        'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_852,h_872/NI_CATALOG/IMAGES/CIW/2024/6/8/61f399a1-c6cd-4c5b-8d21-1f8c4f5fd82b_poojaneeds_ZBDC9ZIGDS_MN.png',
      catTitle: 'Light up your diyas asdf asdf sdfsa',
    },
    {
      id: 2,
      bgImg: require('../assets/images/yellow-background.jpg'),
      catImg:
        'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/NI_CATALOG/IMAGES/CIW/2024/6/8/61f399a1-c6cd-4c5b-8d21-1f8c4f5fd82b_poojaneeds_ZBDC9ZIGDS_MN.png',
      catTitle: 'Idols and books',
    },
    {
      id: 3,
      bgImg: require('../assets/images/yellow-background.jpg'),
      catImg:
        'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/NI_CATALOG/IMAGES/CIW/2024/6/8/61f399a1-c6cd-4c5b-8d21-1f8c4f5fd82b_poojaneeds_ZBDC9ZIGDS_MN.png',
      catTitle: 'Temple Decor',
    },
    {
      id: 4,
      bgImg: require('../assets/images/yellow-background.jpg'),
      catImg:
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/060ec3eb292685608ad9280a0c32fef1',
      catTitle: 'Flower & Leaves',
    },
    {
      id: 5,
      bgImg: require('../assets/images/yellow-background.jpg'),
      catImg:
        'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/24d6fe3bdcb64e4795124adf3e9a0935',
      catTitle: 'Flower & Leaves',
    },
    {
      id: 6,
      bgImg: require('../assets/images/yellow-background.jpg'),
      catImg:
        'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/NI_CATALOG/IMAGES/CIW/2024/6/8/61f399a1-c6cd-4c5b-8d21-1f8c4f5fd82b_poojaneeds_ZBDC9ZIGDS_MN.png',
      catTitle: 'Flower & Leaves',
    },
  ];
  return (
    <View style={styles.container}>
      {data.map((item: any) => (
        <View style={styles.categoryWrapper} key={item.id}>
          <View style={styles.categoryCard}>
            <ImageBackground source={item.bgImg} style={styles.categoryBGImg}>
              <View style={styles.categoryImg}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: item.catImg,
                  }}
                  resizeMode="contain"
                />
              </View>
            </ImageBackground>
          </View>
          <View style={styles.categoryTitleView}>
            <Text style={styles.categoryTitle} numberOfLines={2}>
              {item.catTitle}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default HomeTop6Category;

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH * 0.95,
    alignSelf: 'center',
    height: responsiveHeight(38),
    // backgroundColor: 'pink',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    overflow: 'hidden',
  },
  categoryCard: {
    height: '75%',
    //backgroundColor: 'green',
    overflow: 'hidden',
    borderRadius: responsiveWidth(3),
  },
  categoryWrapper: {
    width: DEVICE_WIDTH * 0.29,
    height: responsiveHeight(18),
    // backgroundColor: 'grey',
    justifyContent: 'space-around',
  },
  categoryBGImg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  categoryImg: {
    width: '60%',
    height: '100%',
    marginBottom: -15,
  },
  categoryTitleView: {
    //backgroundColor: 'red',
    marginTop: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  categoryTitle: {
    fontSize: responsiveFontSize(1.5),
    color: COLORS.primaryBlack,
    fontFamily: FONTFAMILY.font_medium,
  },
});
