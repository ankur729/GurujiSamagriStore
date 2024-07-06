import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import ProductList from '../components/ProductList';
import {COLORS, FONTFAMILY} from '../theme/theme';

const ProductCategory = () => {
  const data = [
    {
      id: 1,
      catImg:
        'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_852,h_872/NI_CATALOG/IMAGES/CIW/2024/6/8/61f399a1-c6cd-4c5b-8d21-1f8c4f5fd82b_poojaneeds_ZBDC9ZIGDS_MN.png',
      catTitle: 'Guruji Bracelts',
      selected: true,
    },
    {
      id: 2,
      catImg:
        'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/NI_CATALOG/IMAGES/CIW/2024/6/8/61f399a1-c6cd-4c5b-8d21-1f8c4f5fd82b_poojaneeds_ZBDC9ZIGDS_MN.png',
      catTitle: 'Idols and books',
      selected: false,
    },
    {
      id: 3,
      catImg:
        'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/NI_CATALOG/IMAGES/CIW/2024/6/8/61f399a1-c6cd-4c5b-8d21-1f8c4f5fd82b_poojaneeds_ZBDC9ZIGDS_MN.png',
      catTitle: 'Temple Decor',
      selected: false,
    },
    {
      id: 4,
      catImg:
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/060ec3eb292685608ad9280a0c32fef1',
      catTitle: 'Flower & Leaves',
      selected: false,
    },
    {
      id: 5,
      catImg:
        'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/24d6fe3bdcb64e4795124adf3e9a0935',
      catTitle: 'Flower & Leaves',
      selected: false,
    },
    {
      id: 6,
      catImg:
        'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/NI_CATALOG/IMAGES/CIW/2024/6/8/61f399a1-c6cd-4c5b-8d21-1f8c4f5fd82b_poojaneeds_ZBDC9ZIGDS_MN.png',
      catTitle: 'Guruji Collection',
      selected: false,
    },
    {
      id: 7,
      catImg:
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/060ec3eb292685608ad9280a0c32fef1',
      catTitle: 'Flower & Leaves',
      selected: false,
    },
    {
      id: 8,
      catImg:
        'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/24d6fe3bdcb64e4795124adf3e9a0935',
      catTitle: 'Flower & Leaves',
      selected: false,
    },
    {
      id: 9,
      catImg:
        'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_252,h_272/NI_CATALOG/IMAGES/CIW/2024/6/8/61f399a1-c6cd-4c5b-8d21-1f8c4f5fd82b_poojaneeds_ZBDC9ZIGDS_MN.png',
      catTitle: 'Guruji Collection',
      selected: false,
    },
  ];

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.categoryWrapper}>
        <View style={styles.categoryImgWrapper}>
          <View style={styles.roundImgWrapper}>
            <Image
              source={{
                uri: item.catImg,
              }}
              resizeMode={'contain'}
              style={styles.categoryImg}
            />
          </View>
        </View>
        <View style={styles.categoryTxtWrapper}>
          <Text style={styles.categoryTxt} numberOfLines={3}>
            {item.catTitle}
          </Text>
        </View>

        {item.selected && <View style={styles.selectedCategory}></View>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.productListContainer}>
        {/* <ProductList itemHeight={responsiveHeight(3) * 10} /> */}
      </View>
    </View>
  );
};

export default ProductCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor: 'pink',
    flexDirection: 'row',
  },
  categoryContainer: {
    width: responsiveScreenWidth(20),
    backgroundColor: COLORS.primaryWhiteHex,
    elevation: 2,
    // backgroundColor: 'orange',
  },
  productListContainer: {
    flex: 1,
    //backgroundColor: 'green',
  },

  categoryWrapper: {
    height: responsiveScreenHeight(12),
    position: 'relative',
    //   backgroundColor: 'yellow',
  },
  categoryImgWrapper: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'pink',
  },
  roundImgWrapper: {
    width: '70%',
    height: '70%',
    backgroundColor: COLORS.secondaryLightGreyHex,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    // backgroundColor: 'red',
    overflow: 'hidden',
  },
  categoryImg: {
    width: '90%',
    height: '90%',
  },
  categoryTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    //backgroundColor: 'green',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  categoryTxt: {
    color: COLORS.primaryBlack,
    fontFamily: FONTFAMILY.font_light,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: responsiveFontSize(1.3),
  },

  selectedCategory: {
    position: 'absolute',
    backgroundColor: 'green',
    top: 5,
    alignSelf: 'center',
    width: 4,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    height: '80%',
    right: 0,
  },
});
