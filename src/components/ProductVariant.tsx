import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomBottomSheet from './CustomBottomSheet';
import {COLORS, FONTFAMILY} from '../theme/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AddCartButton from './common/AddCartButton';
import RupeeSymbol from './common/RupeeSymbol';
import {DEVICE_WIDTH} from '../helpers/Dimensions';

const ProductVariant = () => {
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
        'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
      itemUnit: '1 Unit',
      discountPerc: '5',
      title: 'Testing product',
      price: {
        mrp: '2000',
        discountedPrice: '1289',
      },
    },
  ];
  //   const data = [
  //     {
  //       id: 1,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 2,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 3,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 4,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 5,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 6,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 7,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 8,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 9,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 10,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 11,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 12,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 13,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 14,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 15,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 16,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //     {
  //       id: 17,
  //       imageUri:
  //         'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6a7816b5-7196-429e-a24b-e07efe8451f1.jpg?ts=1718139523',
  //       itemUnit: '1 Unit',
  //       discountPerc: '5',
  //       title: 'Testing product',
  //       price: {
  //         mrp: '2000',
  //         discountedPrice: '1289',
  //       },
  //     },
  //   ];

  const renderItem = ({item}: any) => {
    return (
      <View
        style={[
          styles.productItemContainer,
          item.id == data.length ? {marginBottom: 55} : null,
        ]}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item.imageUri}}
            resizeMode={'contain'}
            style={styles.image}
          />
        </View>
        <View style={styles.unitContainer}>
          <Text style={styles.unit}>10 units</Text>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.discountedPriceContainer}>
            <RupeeSymbol
              color={COLORS.primaryBlack}
              size={responsiveFontSize(1.8)}
            />
            <Text style={styles.discountedPrice}>123</Text>
          </View>
          <View style={styles.mrpPriceContainer}>
            <RupeeSymbol
              color={COLORS.primaryBlack}
              size={responsiveFontSize(1.8)}
            />
            <Text style={styles.mrpPrice}>1323</Text>
          </View>
        </View>
        <View style={styles.addBtnContainer}>
          <View style={styles.addBtnViewer}>
            <AddCartButton />
          </View>
        </View>
      </View>
    );
  };
  return (
    <CustomBottomSheet>
      <View style={styles.container}>
        <Text style={styles.heading} numberOfLines={1}>
          Bold Care New Variant Product
        </Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.saveBtnContainer}>
          <Text style={styles.saveTxt}>DONE</Text>
        </View>
      </View>
    </CustomBottomSheet>
  );
};

export default ProductVariant;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondaryLightGreyHex,
  },
  heading: {
    fontFamily: FONTFAMILY.font_bold,
    color: COLORS.primaryBlack,
    fontSize: responsiveFontSize(2),
    marginVertical: 5,
  },
  productItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    // backgroundColor: 'green',
    height: responsiveHeight(9),
    overflow: 'hidden',
    marginVertical: 8,
    borderRadius: responsiveWidth(2),
    backgroundColor: COLORS.primaryWhiteHex,
  },
  imageContainer: {
    flex: 1,
    //    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  unitContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  unit: {
    color: COLORS.primaryBlack,
    fontFamily: FONTFAMILY.font_light,
    textAlignVertical: 'center',
    fontSize: responsiveFontSize(1.4),
  },
  priceContainer: {
    flex: 1.3,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  discountedPriceContainer: {
    flexDirection: 'row',
  },
  discountedPrice: {
    color: COLORS.primaryBlack,
    fontFamily: FONTFAMILY.font_black,
    textAlignVertical: 'center',
    fontSize: responsiveFontSize(1.6),
  },
  mrpPriceContainer: {
    flexDirection: 'row',
  },
  mrpPrice: {
    fontFamily: FONTFAMILY.font_regular,
    fontSize: responsiveFontSize(1.4),
    textDecorationLine: 'line-through',
    textAlignVertical: 'center',
    color: COLORS.darkGray,
  },
  addBtnContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnViewer: {
    width: '80%',
    height: '50%',
  },
  saveBtnContainer: {
    width: '100%',
    borderRadius: 5,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.primaryGreenHex,
  },
  saveTxt: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.font_medium,
    textAlignVertical: 'center',
    textTransform: 'capitalize',
    fontSize: responsiveFontSize(1.9),
  },
});
