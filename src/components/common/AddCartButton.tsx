import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomIcon, {IconSetKey} from '../../helpers/CustomIcon';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTFAMILY} from '../../theme/theme';

const AddCartButton = () => {
  const CartButton = () => {
    return (
      <View style={styles.cartBtnContainer}>
        <View style={styles.left}>
          <CustomIcon
            type={IconSetKey.Entypo}
            name="minus"
            style={styles.iconStyle}
            size={responsiveWidth(6)}
          />
        </View>
        <View style={styles.center}>
          <Text style={styles.count}>1</Text>
        </View>
        <View style={styles.right}>
          <CustomIcon
            type={IconSetKey.Entypo}
            name="plus"
            style={styles.iconStyle}
            size={responsiveWidth(6)}
          />
        </View>
      </View>
    );
  };

  const AddButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.addTxt}>ADD</Text>
        {/* <View style={styles.optionContainer}>
          <Text style={styles.optionTxt}>2 options</Text>
        </View> */}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* <CartButton /> */}
      <AddButton />
    </View>
  );
};

export default AddCartButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    //backgroundColor: 'green',
    borderRadius: responsiveWidth(2),
    borderWidth: 1,
    borderColor: COLORS.primaryGreenHex,
  },
  cartBtnContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryGreenHex,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },

  center: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  count: {
    fontFamily: FONTFAMILY.font_bold,
    color: COLORS.primaryWhiteHex,
    fontSize: responsiveFontSize(2),
  },
  right: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  iconStyle: {
    fontFamily: FONTFAMILY.font_bold,
    color: COLORS.primaryWhiteHex,
    fontSize: responsiveFontSize(2.2),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  addTxt: {
    fontFamily: FONTFAMILY.font_bold,
    color: COLORS.primaryGreenHex,
    fontSize: responsiveFontSize(1.8),
  },
  optionContainer: {
    position: 'absolute',
    bottom: responsiveWidth(-1.5),
    backgroundColor: COLORS.primaryWhiteHex,
    paddingHorizontal: 2,
    //backgroundColor: 'red',
  },
  optionTxt: {
    fontFamily: FONTFAMILY.font_medium,
    color: COLORS.darkGray,
    fontSize: responsiveFontSize(1.2),
  },
});
