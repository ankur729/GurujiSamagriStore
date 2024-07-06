import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY} from '../../theme/theme';
import {DEVICE_WIDTH} from '../../helpers/Dimensions';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Price from './Price';
import AddCartButton from './AddCartButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types';

interface PropTypes {
  item: any;
  itemWidth: number | string;
  itemHeight: number | string;
  imageBorder?: boolean;
}

const ProductListItem: React.FC<PropTypes> = ({
  item,
  itemWidth,
  imageBorder,
  itemHeight,
}: any) => {
  const imageBorderStyle = {
    borderRadius: responsiveWidth(2),
    borderWidth: responsiveWidth(0.05),
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={[styles.listItem, {width: itemWidth, height: itemHeight}]}>
      <TouchableOpacity
        style={[
          styles.firstHalfContainer,
          imageBorder ? imageBorderStyle : null,
        ]}
        onPress={() => navigation.navigate('ProductCatgory')}>
        <Image
          source={{uri: item.imageUri}}
          style={styles.image}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <View style={styles.secondHalfContainer}>
        <View style={styles.secondHalfTitle}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
        <View style={styles.secondHalfProductUnit}>
          <Text style={styles.itemUnit}>{item.itemUnit}</Text>
        </View>
        <View style={styles.secondHalfPriceContainer}>
          <View style={styles.bottomLeft}>
            <Price
              discountedPrice={item.price.discountedPrice}
              mrpPrice={item.price.mrp}
            />
          </View>
          <View style={styles.bottomRight}>
            <AddCartButton />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  listItem: {
    //  backgroundColor: 'gray',
    overflow: 'hidden',
    margin: 3,
    paddingHorizontal: 5,
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: responsiveWidth(2),
  },
  firstHalfContainer: {
    flex: 1.2,
    margin: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
  },
  image: {
    width: '85%',
    height: '85%',
    overflow: 'hidden',
  },
  secondHalfContainer: {
    flex: 1,
    // backgroundColor: 'orange',
    paddingHorizontal: 2,
  },
  secondHalfTitle: {
    marginVertical: 3,
    paddingVertical: 3,
    //backgroundColor: 'pink',
    height: responsiveHeight(1) * 4.3,
  },
  title: {
    color: COLORS.primaryBlack,
    fontSize: responsiveFontSize(1.5),
    textTransform: 'capitalize',
    fontFamily: FONTFAMILY.font_medium,
  },
  secondHalfProductUnit: {
    // backgroundColor: 'yellow',
    paddingVertical: 2,
  },
  itemUnit: {
    color: COLORS.primaryLightGreyHex,
    fontFamily: FONTFAMILY.font_thin,
  },
  secondHalfPriceContainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'green',
    flexDirection: 'row',
  },
  bottomLeft: {
    flex: 1,
    // backgroundColor: 'purple',
  },
  bottomRight: {
    flex: 1.2,
    height: 50,
    //backgroundColor: 'brown',
    paddingHorizontal: 3,
    paddingVertical: 5.5,
  },
});
